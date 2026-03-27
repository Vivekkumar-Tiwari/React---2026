import Card from "./components/card"

function App() {
  return (
    <>
      <div className="bg-red-200 p-6 text-xl font-bold mb-4 justify-center items-center flex">
        Hello Vivek
      </div>

      <div className="flex justify-center items-center gap-6 flex-wrap">
        <Card
          username="Vivek is Jord to do code"
          btnText="click me"
          image="https://images.unsplash.com/photo-1547721064-da6cfb341d50"
        />

        <Card
          username="bablue"
          image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        />

        <Card
          username="Tiwari"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        />
      </div>
    </>
  )
}

export default App;