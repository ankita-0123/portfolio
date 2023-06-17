import { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContainer from '../../components/pageHeaderContainer/PageHeaderContainer';
import './Project.scss';

const projectData = [
  {
    id: 2,
    name: 'Ecommerce',
    image: require('../../images/image1.jpg'),
    link: 'https://github.com/ankita-0123/react-module2',
  },
  {
    id: 3,
    name: 'Expense Traker App',
    image: require('../../images/image2.jpg'),
    link: 'https://github.com/ankita-0123/expense',
  },
  {
    id: 2,
    name: 'Food Ordering App',
    image: require('../../images/image3.jpg'),
    link: 'https://github.com/ankita-0123/react-module1',
  },
  {
    id: 2,
    name: 'MailBox',
    image: require('../../images/image4.jpg'),
    link: 'https://github.com/ankita-0123/mail',
  },
  {
    id: 3,
    name: 'Tv show App',
    image: require('../../images/image5.jpg'),
    link: 'https://github.com/ankita-0123/TVshow-App',
  },
  {
    id: 4,
    name: 'Portfolio',
    image: require('../../images/image6.png'),
    link: '',
  },
];

const filterData = [
  {
    filterId: 1,
    label: 'All',
  },
  {
    filterId: 2,
    label: 'Development',
  },
  {
    filterId: 3,
    label: 'Design',
  },
];

const Project = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  const filteredItems =
    filteredValue === 1
      ? projectData
      : projectData.filter((item) => item.id === filteredValue);

  return (
    <section className="project">
      <PageHeaderContainer headerText="Project" icon={<BsInfoCircleFill size={30} />} />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? 'active' : ''}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <button>Visit</button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
