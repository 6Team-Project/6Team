import '../styles/List/List.scss';
import ListCard from '../components/List/ListCard';
import Header from '../components/header/Header';

export default function List() {
  return (
    <>
      <Header />
      <div className='list'>
        <div className='list__best'>
          <p className='list__best-title'>인기 롤링 페이퍼 🔥</p>
          <div className='list__best-cards'>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        </div>

        <div className='list__newest'>
          <p className='list__newest-title'>최근에 만든 롤링 페이퍼 ⭐️</p>
          <div className='list__newest-cards'>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        </div>

        <button className='list__create-btn'>나도 만들어보기</button>
      </div>
    </>
  );
}
