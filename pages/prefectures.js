import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import prefectures from '../styles/Prefectures.module.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { firebaseDb } from '../firebase/index.js'

const Prefectures = () => {
  const [cityData, setCityData] = useState([])
	const [activeState, setActiveState] = useState([])
	const router = useRouter();
	// パスパラメータから値を取得
	const { preCode } = router.query;
	const localStgId = 'good-district' + preCode
	
	const countUp = (index, type) =>{
		const localStgId = cityData[index]['citycode']+type
		if ((localStorage.getItem(localStgId) === null)) {
			localStorage.setItem(localStgId, true);
			const copycity = [...cityData]
			copycity[index][type]++
			firebaseDb.ref(preCode).set(copycity);
			setCityData(copycity)
		} else {
				window.alert('１市町村に対して１回押すことができます')
		}
	}

	const setGood = (index) => {
		const copyData = [...cityData]
		const copyState = [...activeState]
		copyData[index].good = copyState[index].goodactive ? copyData[index].good - 1 : copyData[index].good + 1
		copyState[index].goodactive =  !copyState[index].goodactive
		firebaseDb.ref(preCode).set(copyData);
		setCityData(copyData)
		localStorage.setItem(localStgId, JSON.stringify(copyState));
		setActiveState(copyState)
	}

	const setBad = (index) => {
		const copyData = [...cityData]
		const copyState = [...activeState]
		copyData[index].bad = copyState[index].badactive ? copyData[index].bad - 1 : copyData[index].bad + 1
		copyState[index].badactive =  !copyState[index].badactive
		firebaseDb.ref(preCode).set(copyData);
		setCityData(copyData)
		localStorage.setItem(localStgId, JSON.stringify(copyState));
		setActiveState(copyState)
	}

	const setGoodBad = (index, type) => {
		const copyData = [...cityData]
		const copyState = [...activeState]
		copyData[index][type] = copyState[index][type+'active'] ? copyData[index][type] - 1 : copyData[index][type] + 1
		copyState[index][type+'active'] =  !copyState[index][type+'active']
		firebaseDb.ref(preCode).set(copyData);
		setCityData(copyData)
		localStorage.setItem(localStgId, JSON.stringify(copyState));
		setActiveState(copyState)
	}

	const handleLike = (index) => {
		setGoodBad(index,'good')
    if (activeState[index].badactive) {
      setGoodBad(index,'bad')
    }
  }

  const handleDislike = (index) => {
		setGoodBad(index,'bad')
    if (activeState[index].goodactive) {
      setGoodBad(index,'good')
    }
  }


	useEffect(() => {
		// const f = async() =>{
		// 	const data = await requestCity(preCode)
		// 	console.log(data)
		// }
		firebaseDb.ref(preCode).on("value", (data)=> {
			if (data) {
				//console.log(localStorage.getItem(localStgId))
				if ((localStorage.getItem(localStgId) === null)) {
					const actives = data.val().map(()=>{
						return(
							{goodactive:false, badactive:false}
						)
					})
					setActiveState(actives)
				}
				else
				{
					setActiveState(JSON.parse(localStorage.getItem(localStgId)))
				}
				setCityData(data.val())
			}
		});
	},[])


	// const requestCity = async (preCode) => {
	// 	try{
	// 		const res = await axios('https://opendata.resas-portal.go.jp/api/v1/cities?prefCode='+preCode,{
	// 			headers:{ 'X-API-KEY': 'CVOkbeaEzBIagVaey2hxjWizntOlmHM3ZtC8OwFd'}
	// 		})
  //     setCityData(res.data)
	// 	}
	// 	catch (error) {    
	// 		console.log("error!!")
	// 	}
	// }

  return (
    <div className={prefectures.container}>
			<Table className={prefectures.table} striped bordered>
				<thead>
					<tr className={prefectures.header}>
						<th>市町村コード</th>
						<th>支庁市郡区町村</th>
						<th>good👍</th>
						<th>bad👎</th>
					</tr>
				</thead>
				<tbody>
          {
            cityData.map((city, index)=>
            {
              return(
                <tr key={index} className={prefectures.header}>
                  <th>{city.citycode}</th>
                  <th>{city.name}</th>
                  <th>
										<button className={activeState[index].goodactive ? prefectures.iconbutton_on : prefectures.iconbutton_off} onClick={()=>handleLike(index)}>👍</button>
										<span className={activeState[index].goodactive ? prefectures.count_good : prefectures.count_off}>{''+city.good}</span></th>
                  <th>
										<button className={activeState[index].badactive ? prefectures.iconbutton_on : prefectures.iconbutton_off} onClick={()=>handleDislike(index)}>👎</button>
										<span className={activeState[index].badactive ? prefectures.count_bad : prefectures.count_off}>{''+city.bad}</span>
									</th>
                </tr>
              )
            })
          }
				</tbody>
			</Table>
    </div>
  )
}

Prefectures.getInitialProps = ({query}) => {
  return {
		query
  }
}

export default Prefectures