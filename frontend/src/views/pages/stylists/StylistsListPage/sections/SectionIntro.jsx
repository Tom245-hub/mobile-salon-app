import React from "react";
import PageTitle from "../../../../components/fonts/PageTitle";
import CommentText from "../../../../components/fonts/CommentText";

const SectionIntro = () => {
  return (
    <>
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
    </>
  );
};

export default SectionIntro;
