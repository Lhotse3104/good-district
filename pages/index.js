import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  const PREFECTURES = "/prefectures?preCode="
  const HOKKAIDOU_TOUHOKU = [
    {
      preCode:'1',
      name:'北海道',
      id:'hokkaido',
    },
    {
      preCode:'2',
      name:'青森',
      id:'aomori'
    },
    {
      preCode:'3',
      name:'岩手',
      id:'iwate'
    },
    {
      preCode:'5',
      name:'秋田',
      id:'akita'
    },
    {
      preCode:'6',
      name:'山形',
      id:'yamagata'
    },
    {
      preCode:'4',
      name:'宮城',
      id:'miyagi'
    },
    {
      preCode:'7',
      name:'福島',
      id:'fukushima'
    },
  ]
  const KANTOU = [
    {
      preCode:'10',
      name:'群馬',
      id:'gunma',
    },
    {
      preCode:'9',
      name:'栃木',
      id:'tochigi'
    },
    {
      preCode:'8',
      name:'茨城',
      id:'ibaraki'
    },
    {
      preCode:'11',
      name:'埼玉',
      id:'saitama'
    },
    {
      preCode:'12',
      name:'千葉',
      id:'chiba'
    },
    {
      preCode:'13',
      name:'東京',
      id:'tokyo'
    },
    {
      preCode:'14',
      name:'神奈川',
      id:'kanagawa'
    },
  ]
  const TYUBU = [
    {
      preCode:'15',
      name:'新潟',
      id:'nigata',
    },
    {
      preCode:'16',
      name:'富山',
      id:'toyama'
    },
    {
      preCode:'17',
      name:'石川',
      id:'ishikawa'
    },
    {
      preCode:'18',
      name:'福井',
      id:'fukui'
    },
    {
      preCode:'20',
      name:'長野',
      id:'nagano'
    },
    {
      preCode:'21',
      name:'岐阜',
      id:'gifu'
    },
    {
      preCode:'19',
      name:'山梨',
      id:'yamanashi'
    },
    {
      preCode:'23',
      name:'愛知',
      id:'aichi'
    },
    {
      preCode:'22',
      name:'静岡',
      id:'shizuoka'
    },
  ]
  const KINKI = [
    {
      preCode:'26',
      name:'京都',
      id:'kyoto',
    },
    {
      preCode:'25',
      name:'滋賀',
      id:'shiga'
    },
    {
      preCode:'27',
      name:'大阪',
      id:'osaka'
    },
    {
      preCode:'29',
      name:'奈良',
      id:'nara'
    },
    {
      preCode:'24',
      name:'三重',
      id:'mie'
    },
    {
      preCode:'30',
      name:'和歌山',
      id:'wakayama'
    },
    {
      preCode:'28',
      name:'兵庫',
      id:'hyougo'
    },
  ]
  const TYUGOKU = [
    {
      preCode:'31',
      name:'鳥取',
      id:'tottori',
    },
    {
      preCode:'33',
      name:'岡山',
      id:'okayama'
    },
    {
      preCode:'32',
      name:'島根',
      id:'shimane'
    },
    {
      preCode:'34',
      name:'広島',
      id:'hiroshima'
    },
    {
      preCode:'35',
      name:'山口',
      id:'yamaguchi'
    },
  ]
  const SHIKOKU = [
    {
      preCode:'37',
      name:'香川',
      id:'kagawa',
    },
    {
      preCode:'38',
      name:'愛媛',
      id:'ehime'
    },
    {
      preCode:'36',
      name:'徳島',
      id:'tokushima'
    },
    {
      preCode:'39',
      name:'高知',
      id:'kouchi'
    },
  ]
  const KYUSYU = [
    {
      preCode:'40',
      name:'福岡',
      id:'fukuoka',
    },
    {
      preCode:'41',
      name:'佐賀',
      id:'saga'
    },
    {
      preCode:'42',
      name:'長崎',
      id:'nagasaki'
    },
    {
      preCode:'44',
      name:'大分',
      id:'oita'
    },
    {
      preCode:'43',
      name:'熊本',
      id:'kumamoto'
    },
    {
      preCode:'45',
      name:'宮崎',
      id:'miyazaki'
    },
    {
      preCode:'46',
      name:'鹿児島',
      id:'kagoshima'
    },
    {
      preCode:'47',
      name:'沖縄',
      id:'okinawa'
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.japan_map}>
        <div className={styles.hokkaido_touhoku + " " +styles.clearfix}>
          <p className={styles.area_title}>北海道・東北</p>
          <div className={styles.area}>
            {
              HOKKAIDOU_TOUHOKU.map((prefecture,i)=>{
                const index = i+1
                return(
                  <Link key={index} href={PREFECTURES+prefecture.preCode}>
                    <a>
                      <div className={styles[prefecture.id]}>
                        <p>{prefecture.name}</p>
                      </div>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>
        <div className={styles.kantou + " " +styles.clearfix}>
          <p className={styles.area_title}>関東</p>
          <div className={styles.area}>
            {
              KANTOU.map((prefecture,i)=>{
                const index = i+1+HOKKAIDOU_TOUHOKU.length
                return(
                  <Link key={index} href={PREFECTURES+prefecture.preCode}>
                    <a>
                      <div className={styles[prefecture.id]}>
                        <p>{prefecture.name}</p>
                      </div>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>
        <div className={styles.tyubu + " " +styles.clearfix}>
          <p className={styles.area_title}>中部</p>
          <div className={styles.area}>
            {
              TYUBU.map((prefecture,i)=>{
                const index = i+1+HOKKAIDOU_TOUHOKU.length+KANTOU.length
                return(
                  <Link key={index} href={PREFECTURES+prefecture.preCode}>
                    <a>
                      <div className={styles[prefecture.id]}>
                        <p>{prefecture.name}</p>
                      </div>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>

        <div className={styles.kinki + " " + styles.clearfix}>
          <p className={styles.area_title}>近畿</p>
          <div className={styles.area}>
            {
              KINKI.map((prefecture,i)=>{
                const index = i+1+HOKKAIDOU_TOUHOKU.length+KANTOU.length+TYUBU.length
                return(
                  <Link key={index} href={PREFECTURES+prefecture.preCode}>
                    <a>
                      <div className={styles[prefecture.id]}>
                        <p>{prefecture.name}</p>
                      </div>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>

        <div className={styles.tyugoku + " " + styles.clearfix}>
          <p className={styles.area_title}>中国</p>
          <div className={styles.area}>
            {
              TYUGOKU.map((prefecture,i)=>{
                const index = i+1+HOKKAIDOU_TOUHOKU.length+KANTOU.length+TYUBU.length+KINKI.length
                return(
                  <Link key={index} href={PREFECTURES+prefecture.preCpde}>
                    <a>
                      <div className={styles[prefecture.id]}>
                        <p>{prefecture.name}</p>
                      </div>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>

        <div className={styles.shikoku + " " + styles.clearfix}>
          <p className={styles.area_title}>四国</p>
          <div className={styles.area}>
            {
              SHIKOKU.map((prefecture,i)=>{
                const index = i+1+HOKKAIDOU_TOUHOKU.length+KANTOU.length+TYUBU.length+KINKI.length+TYUGOKU.length
                return(
                  <Link key={index} href={PREFECTURES+prefecture.preCode}>
                    <a>
                      <div className={styles[prefecture.id]}>
                        <p>{prefecture.name}</p>
                      </div>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>

        <div className={styles.kyusyu + " " + styles.clearfix}>
          <p className={styles.area_title}>九州・沖縄</p>
          <div className={styles.area}>
          {
              KYUSYU.map((prefecture,i)=>{
                const index = i+1+HOKKAIDOU_TOUHOKU.length+KANTOU.length+TYUBU.length+KINKI.length+TYUGOKU.length+SHIKOKU.length
                return(
                  <Link key={index} href={PREFECTURES+prefecture.preCode}>
                    <a>
                      <div className={styles[prefecture.id]}>
                        <p>{prefecture.name}</p>
                      </div>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home