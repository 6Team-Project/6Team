import styles from '../styles/main/main.module.scss'
import section01 from '../assets/main/section01.svg'
import section02 from '../assets/main/section02.png'

function Main() {
  return (
    <div className={styles.alignment}>
      <section className={styles.section1}>
        <div className={styles.textbox}>
          <p className={styles.point}>Point. 01</p>
          <h2>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</h2>
          <p className={styles.description}>로그인 없이 자유롭게 만들어요.</p>
        </div>
        <div>
          <img src={section01} alt='롤링페이퍼 예시 사진' className={styles.img1} />
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.textbox}>
          <p className={styles.point}>Point. 02</p>
          <h2>서로에게 이모지로 감정을 표현해보세요</h2>
          <p className={styles.description}>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
        </div>
        <div>
          <img src={section02} alt='이모지 추가 예시 사진' className={styles.img2} />
        </div>
      </section>
      <div>
        <p>구경해보기</p>
      </div>
    </div>
  )
}

export default Main
