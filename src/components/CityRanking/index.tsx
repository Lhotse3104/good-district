import React, { useEffect, useState } from "react"
import styles from './CityRanking.module.css'
import Table from 'react-bootstrap/Table'
import { firebaseDb } from '../../../firebase/index.js'

const CityRanking = () => {
  const [cityData, setCityData] = useState([])
	const [count, setCount] = useState(47)
	useEffect(() => {
		firebaseDb.ref('citydata').on("value", (data)=> {
			if (data) {
				let listData = []
				data.val().forEach(ele =>
				{
					listData = listData.concat(ele)
				})

				listData.sort(function(a, b) {
					if (a.good > b.good) {
						return -1;
					} else {
						return 1;
					}
				})
				setCityData(listData)
				// setCount(count-1)
				// if(count==0){
				// 	cityData.sort(function(a, b) {
				// 		if (a.good >0 && a.good > b.good) {
				// 				return 1;
				// 		} else {
				// 				return -1;
				// 		}
				// 	});
				// }
			}
		})
	},[])

  return (
    <div>
			<Table className={styles.table} striped bordered>
				<thead>
					<tr className={styles.header}>
						<th>ランキング</th>
						<th>支庁市郡区町村</th>
						<th>good👍</th>
					</tr>
				</thead>
				<tbody>
          {
            cityData.map((city:any, index:number)=>
            {
              return(
								index < 5 && city.good>0?
									<tr key={index}>
										<th>{index+1}</th>
										<th>{city.name}</th>
										<th>{city.good}</th>
									</tr>
								: null
              )
            })
          }
				</tbody>
			</Table>
    </div>
  )
}

export default CityRanking