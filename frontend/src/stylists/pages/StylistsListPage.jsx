import React, { useContext } from "react";
import { StoreContext } from "../../shared/store/StoreProvider";
import StylistsList from "../components/StylistsList";
import Consultation from "../components/Consultation";

const StylistsListPage = () => {
  const { stylistList } = useContext(StoreContext);
  return (
    <>
      <div className='container py-5'>
        <PageTitle>Stylistki Mobile Salon</PageTitle>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-8'>
            <CommentText>Jesteśmy zespołem stylistów chcących tworzyć nowy standard usługi dla Waszej wygody.</CommentText>
            <CommentText>Dzięki Wam możemy mieć pracę, którą kochamy.</CommentText>
            <CommentText>
              Do naszego zespołu trafiają wyłącznie styliści z doświadczeniem,
              <br />
              zamiłowaniem i kreatywnym spojrzeniem na stylizację wizerunku.
              <br />
              Zapraszamy do galerii naszych prac.
            </CommentText>
          </div>
        </div>
      </div>
      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <StylistsList stylistList={stylistList} />
        </div>
      </div>
      <div className='container py-5'>
        <SectionTitle>Konsultacje telefoniczne</SectionTitle>
        <div className='row d-flex justify-content-center'>
          <div className='col-10 col-md-6'>
            <Consultation />
          </div>
        </div>
      </div>
    </>
  );
};

export default StylistsListPage;
