import Ad from "../components/Ad";
import AdList from "../components/AdList";

const HomePage = () => {
  return (
    <div>
      <AdList />
      <Ad
        imgSrc={"https://placehold.co/200"}
        title={"Title"}
        description={"Description"}
      />
    </div>
  );
};

export default HomePage;
