import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './navigator';
import NavigationBar from './navigator';
import ManageProSection from './bodySection';
import WhyUseManagePro from './bodySection2';
import Footer from './footer';


function App() {
  return (
      <div>
        <NavigationBar />
        <ManageProSection />
        <WhyUseManagePro />
        <Footer />
      </div>

  );
}

export default App;
