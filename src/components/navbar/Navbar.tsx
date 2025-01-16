
function Navbar() {
    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    <button>Blog Pessoal </button>

                    <div className='flex gap-5'>
                        <button className='rounded text-white 
                                           border-white border-solid border-2 
                                           py-2 px-4 transition-colors 
                                           duration-300 
                                           hover:bg-white hover:text-yellow-500'>Postagens</button>
                        <button className='rounded text-white 
                                           border-white border-solid border-2 
                                           py-2 px-4 transition-colors 
                                           duration-300 
                                           hover:bg-white hover:text-yellow-500'>Temas</button>
                        <button className='rounded text-white 
                                           border-white border-solid border-2 
                                           py-2 px-4 transition-colors 
                                           duration-300 
                                           hover:bg-white hover:text-yellow-500'>Cadastrar tema</button>
                        <button className='rounded text-white 
                                           border-white border-solid border-2 
                                           py-2 px-4 transition-colors 
                                           duration-300 
                                           hover:bg-white hover:text-yellow-500'>Perfil</button>
                        <button className='rounded text-white 
                                           border-white border-solid border-2 
                                           py-2 px-4 transition-colors 
                                           duration-300 
                                           hover:bg-white hover:text-yellow-500'>Sair</button>
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar