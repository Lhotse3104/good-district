import React, { useEffect, useState } from "react"
import styles from './Header.module.css'
import Head from 'next/head'

const Header = () => {
  return (
    <Head>
			<title>発達症サポート地域情報共有サイト</title>
      <div className={styles.header}>
        <h2>
        発達症サポート地域情報共有サイト
        </h2>
      </div>
      <div className={styles.contents}>
        <p>
        自閉症を含む様々な発達症などで各種サポートが欠かせない皆の情報共有のサイトです。<br/>
        お住まいの行政区のサポート状況を(行政の対応、小中学校、デイサービス、就業支援、幼稚園、保育園、療育園、医療、検診その他全ての環境のクオリティに対して)総合的に判断して頂き、トータルでGOODまたはBADのいずれかで評価します。<br/>
        その行政区への転入がお勧めできればGOOD、できなければBADです。<br/>
        今いる行政区ってどうなのだろう？他の地域だったらもっと前向きな可能性があるのでは？といった疑問に対してファーストステップの情報を共有するのが目的です。実際に住んでいた、もしくは住んでいる行政区についてのみご回答下さい。
        たくさんの皆様の情報ご提供をお待ちしております( ﹡ˆoˆ﹡ )
        </p>
      </div>
    </Head>
  )
}

export default Header