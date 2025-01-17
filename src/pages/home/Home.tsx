﻿﻿
function Home() {
    return (
        <>
            <div className="bg-yellow-500 flex justify-center items-center min-h-screen">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Sejam Bem Vindos!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div >
                               <button className='rounded text-white 
                                           border-white border-solid border-2 
                                           py-2 px-4 transition-colors 
                                           duration-300 
                                           hover:bg-white hover:text-yellow-500'> Nova Postagem</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/2l5jiGe.jpeg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home