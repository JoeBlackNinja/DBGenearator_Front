
const Main = ({children}) => {
  return (
    <main className="bg-slate-400 md:2/3 lg:w-2/4 shadow mx-auto
    rounded-lg p-10 flex justify-center flex-col">
    <form>
    {children}
    </form>
    </main>
  )
}

export default Main