import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
            <Route exact path="/meal" element={<Meal/>}/>
            <Route exact path="/grocery" element={<Grocery/>}/>
            <Route exact path="/bakery" element={<Bakery/>}/>
            <Route exact path="/partnerwithus" element={<Partner/>}/>
            <Route exact path="/favorite" element={<Favorite/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/account" element={<Account/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
