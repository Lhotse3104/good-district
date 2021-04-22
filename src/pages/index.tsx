import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from "react"
import { preProcessFile } from 'typescript'
import styles from '../styles/Home.module.css'
import { firebaseDb } from '../../firebase/index.js'
import CityRanking from '../components/CityRanking'

const Home = () => {
  const PREFECTURES = "/prefectures?preCode="
  const [prefsInfo, setPrefs] = useState({})
  const prefList = [
    {
      id:'hokkaido_touhoku',
      name:'北海道・東北',
      prefsId:['1','2','3','4','5','6','7']
    },
    {
      id:'kantou',
      name:'関東',
      prefsId:['8','9','10','11','12','13','14']
    }
    ,{
      id:'tyubu',
      name:'中部',
      prefsId:['15','16','17','18','19','20','21','22','23']
    }
    ,{
      id:'kinki',
      name:'近畿',
      prefsId:['24','25','26','27','28','29','30']
    }
    ,{
      id:'tyugoku',
      name:'中国',
      prefsId:['31','32','33','34','35']
    }
    ,{
      id:'shikoku',
      name:'四国',
      prefsId:['36','37','38','39']
    }
    ,{
      id:'kyusyu',
      name:'九州・沖縄',
      prefsId:['40','41','42','43','44','45','46','47']
    }
  ]

  useEffect(() => {
    firebaseDb.ref('prefecturedata').on("value", (data)=> {
      const prefecture = data.val()
      if(prefecture) setPrefs(prefecture)
    })
	},[])

  return (
    <div className={styles.container}>
      <div className={styles.japan_map}>
        {
          prefList.map((prefs)=>{
            return(
              <div key={prefs.id} className={styles[prefs.id] + " " +styles.clearfix}>
                <p className={styles.area_title}>{prefs.name}</p>
                <div className={styles.area}>
                  {
                    prefs.prefsId.map((prefId)=>{
                      if(prefsInfo[prefId])
                      return(
                        <Link key={prefId} href={PREFECTURES+prefId}>
                          <a>
                            <div className={styles[prefsInfo[prefId]['id']]}>
                              <p>{prefsInfo[prefId]['name']}</p>
                            </div>
                          </a>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
            <div className={styles.cityrank}>
        <CityRanking/>
      </div>
    </div>
  )
}

export default Home