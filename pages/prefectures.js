import React, { useEffect, useState } from "react"
import { useRouter } from "next/router";
import prefectures from '../styles/Prefectures.module.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios'


const Prefectures = () => {
  const [cityData, setCityData] = useState({"message":null, "result":[]})
	const router = useRouter();
	// パスパラメータから値を取得
	const { preCode } = router.query;
	useEffect(() => {
		console.log()
		const f = async() =>{
			const data = await requestCity(preCode)
			console.log(data)
		}
		f()
	},[])

	const requestCity = async (preCode) => {
		try{
			const res = await axios('https://opendata.resas-portal.go.jp/api/v1/cities?prefCode='+preCode,{
				headers:{ 'X-API-KEY': 'CVOkbeaEzBIagVaey2hxjWizntOlmHM3ZtC8OwFd'}
			})
			console.log(res.data)
      setCityData(res.data)
		}
		catch (error) {    
			console.log("error!!")
		}
	}

  return (
    <div className={prefectures.container}>
			<Table striped bordered>
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
            cityData.result.map((city, index)=>
            {
              return(
                <tr key={index} className={prefectures.header}>
                  <th>{city["cityCode"]}</th>
                  <th>{city["cityName"]}</th>
                  <th>👍</th>
                  <th>👎</th>
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