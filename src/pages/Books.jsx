import { useState } from "react";
import BooksList from "../components/BooksList";
import { FaFilter } from "react-icons/fa";
import Button from "../components/UI/button/Button";

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      author: "С.В. Лукьяненко",
      name: "Семь дней до Мегиддо",
      release_year: 2017,
      description: `"Ктулху. В этом романе нет Ктулху. А всё остальное, пожалуй, тут есть.
      Ах да, ещё в нём нет интернета, его запретили Инсеки! И Луны нет, поскольку они раздробили её на куски. Над Землёй теперь Лунное кольцо с двумя самыми большими осколками – Селеной и Дианой.
      Но все уже привыкли.
      К тому же теперь есть кристаллики, за которые Продавцы могут продать что угодно. Хотя бы и Джоконду. Или две Джоконды, обе настоящие, такие же как в Лувре.
      Довольно доброе начало апокалипсиса, правда?"`,
      pages: 120,
      weight: 309,
      total_amount: 7,
      avalible_amount: 6,
      total_orders: 0,
      url: "https://s4-goods.ozstatic.by/2000/537/31/101/101031537_0.jpg",
    },
    {
      id: 2,
      author: "С.В. Лукьяненко",
      name: "Три дня Индиго",
      release_year: 2019,
      description: `"Прошло всего две недели с того момента, как Максим Воронцов стал Призванным и защитил Гнездо Изменённых. Но события совершают новый и неожиданный поворот. На этот раз помощь Максима требуется могущественным и таинственным Продавцам... а наградой за эту помощь может стать то, чего он хочет больше всего на свете.
      И этот путь уведет его далеко за пределы Москвы..."`,
      pages: 210,
      weight: 340,
      total_amount: 3,
      avalible_amount: 3,
      total_orders: 2,
      url: "https://s5-goods.ozstatic.by/2000/768/70/101/101070768_0.jpg",
    },
    {
      id: 3,
      author: "С.В. Лукьяненко",
      name: "Месяц за Рубиконом",
      release_year: 2021,
      description: `"Вот уже восемь лет Земля – колония Инсеков, чужой могущественной цивилизации. Но правда, открывшаяся Максиму Воронцову, еще тяжелее – Земля никогда не была свободной. Теперь он вынужден покинуть родную планету и скрываться среди Измененных, бывших людей, ставших солдатами Инсеков.

      Ему надо понять, для чего Инсеки ведут бесконечные войны с Прежними. Узнать, что такое Смыслы, которые они собирают как дань с захваченных планет. И найти возможность избавить Землю от вечного рабства – потому что лишь так он сможет вернуть свою любовь.
      
      Но как же жесток этот путь! И что, если лекарство окажется опаснее болезни?"`,
      pages: 306,
      weight: 500,
      total_amount: 10,
      avalible_amount: 8,
      total_orders: 12,
      url: "https://book24.kz/upload/resize_cache/iblock/0ae/390_390_1/u7c8rix6zuptf0stzub2inwnv2wvmw06.png",
    },
    {
      id: 4,
      author: "Ф.М. Достоевский",
      name: "Преступление и наказание",
      release_year: 1866,
      description: `"Одно из "краеугольных" произведений русской и мировой литературы, включенный во все школьные и университетские программы, неоднократно экранизированный роман Достоевского "Преступление и наказание" ставит перед читателем важнейшие нравственно-мировоззренческие вопросы – о вере, совести, грехе и об искуплении через страдание. Опровержение преступной "идеи-страсти", "безобразной мечты", завладевшей умом Родиона Раскольникова в самом "умышленном" и "фантастическом" городе на свете, составляет основное содержание этой сложнейшей, соединившей в себе несколько различных жанров книги. Задуманный как "психологический отчет одного преступления", роман Достоевского предстал перед читателем грандиозным художественно-философским исследованием человеческой природы, христианской трагедией о смерти и воскресении души."`,
      pages: 306,
      weight: 500,
      total_amount: 10,
      avalible_amount: 8,
      total_orders: 12,
      url: "https://cdn.ast.ru/v2/ASE000000000703427/COVER/cover1__w340.jpg",
    },
  ]);

  return (
    <div className="books container">
      <h1 className="caption">Доступные книги</h1>
      <div className="books__content">
        <div className="books__filter">
          <h2>
            <FaFilter />
            Фильтры
          </h2>
          <Button>Применить</Button>
        </div>
        <BooksList books={books} />
      </div>
    </div>
  );
}

export default Books;
