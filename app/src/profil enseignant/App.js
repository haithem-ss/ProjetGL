import FirstComponent from "./FirstComponent";
import Footer from "./Footer";


function App() {
  return (
    <>
      <FirstComponent
        imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeUstPuvAFBLxWVF4UR87v7x1_0BHo3x-tR2MPb0D5YdDpoZzgR9Zvc9KWMMrn74Jrig&usqp=CAU"
        name="Mokhtar Djelloul"
        courses="9 courses"
        bio="“Bio” - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  "
        email="Djamelbnf38@gmail.com"
        phone="+213 549161735"
      />
      <Footer />
    </>
  );
}

export default App;
