import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import prefectures from '../styles/Prefectures.module.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { firebaseDb } from '../firebase/index.js'

const Prefectures = () => {
  const [cityData, setCityData] = useState([])
	const router = useRouter();
	// パスパラメータから値を取得
	const { preCode } = router.query;
	
	const countUp = (index, type) =>{
		const copycity = [...cityData]
		copycity[index][type]++
		firebaseDb.ref(preCode).set(copycity);
		setCityData(copycity)
	}

	useEffect(() => {
		// const f = async() =>{
		// 	const data = await requestCity(preCode)
		// 	console.log(data)
		// }
		firebaseDb.ref(preCode).on("value", (data)=> {
			if (data) {
				const listCity = data.val();
				setCityData(listCity)
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
										<button className={prefectures.iconbutton} onClick={()=>countUp(index,'good')}>👍</button>
										<span>{' '+city.good}</span></th>
                  <th>
										<button className={prefectures.iconbutton} onClick={()=>countUp(index, 'bad')}>👎</button>
										<span>{' '+city.bad}</span>
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