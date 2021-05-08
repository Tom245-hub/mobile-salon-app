import React, { useContext } from "react";

import { StoreContext } from "../../../../store/StoreProvider";

import Card from "../../../components/Card";
import FormGroup from "../../../components/FormGroup";
import SectionTitle from "../../../components/fonts/SectionTitle";
import PageTitle from "../../../components/fonts/PageTitle";

const StylistsListPage = () => {
  const { stylistList } = useContext(StoreContext);

  return (
    <>
      <div className='container py-5'>
        <PageTitle>Stylistki Mobile Salon</PageTitle>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-8'>
            <h4 className='text-center mb-3'>Jesteśmy zespołem stylistów chcących tworzyć nowy standard usługi dla Waszej wygody.</h4>
            <h3 className='text-center mb-3'>Dzięki Wam możemy mieć pracę, którą kochamy.</h3>
            <h4 className='text-center mb-3'>
              Do naszego zespołu trafiają wyłącznie styliści z doświadczeniem,
              <br />
              zamiłowaniem i kreatywnym spojrzeniem na stylizację wizerunku.
              <br />
              Zapraszamy do galerii naszych prac.
            </h4>
          </div>
        </div>
      </div>
      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <div className='row d-flex justify-content-center mb-3'>
            <div className='col-12 col-md-8'>
              <ul className='d-flex justify-content-between'>
                <li>WARSZAWA</li>
                <li>KRAKÓW</li>
                <li>WROCŁAW</li>
                <li>POZNAŃ</li>
                <li>GDAŃSK</li>
              </ul>
            </div>
          </div>
          <div className='row d-flex justify-content-center mb-3'>
            <div className='col-12 col-md-8'>
              <ul className='d-flex justify-content-center'>
                <li className='mx-2'>fryzjerka</li>
                <li className='mx-2'>wizażystka</li>
              </ul>
            </div>
          </div>
          <div className='row'>
            {stylistList.map((item, index) => (
              <div key={index} className='col-6 col-md-3 mb-3'>
                {item.img && <Card img={item.img} url={item.url} title={item.title} bgColorHover={true} />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='container py-5'>
        <SectionTitle>Konsultacje telefoniczne</SectionTitle>
        <div className='row d-flex justify-content-center'>
          <div className='col-10 col-md-6'>
            <FormGroup placeholder='Twój telefon' btnText='Zamów konsultację' />
          </div>
        </div>
      </div>
    </>
  );
};

export default StylistsListPage;
