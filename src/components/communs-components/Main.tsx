
type ChildrenProps = {children: React.ReactNode}

const Main = ({children}:ChildrenProps ) => {
  return <main className='flex justify-center items-center h-screen nt:h-[550px] nt:rounded-[10px] nt:justify-between nt:px-5'> {children} </main>
}

export default Main