import { SocialRow } from "../components/SocialRow"
import { IoIosSend } from "react-icons/io";
const Newslatter = () => {
  return (
    <section className=" flex flex-col xl:flex-row xl:justify-evenly py-8 md:px-14 xl:px-10">
        <section >
             <div>
                <h5 className="text-2xl md:text-3xl font-semibold mb-3">Vamos conversar?</h5>
                <hr className="text-blue-700 w-20"/>
             </div>
             <p className="w-[80%] xl:w-full md:text-3xl xl:text-[1.2em] my-6">Tem um projeto em mente ou quer trocar uma ideia? <br className='hidden xl:flex'/>
             Fique á vontade para me enviar uma mensagem.
             </p>
            <div className='md:my-5'>
                 <SocialRow/>
            </div>
        </section>
       <div className="my-5 xl:w-[40%]">
  <form action="https://formsubmit.co/devfrontend2028study@gmail.com" method="POST">
    <div className="grid gap-2">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="Nome"
          className="input w-full h-10"
        />

        <input
          type="email"
          placeholder="Email"
          className="input w-full h-10"
        />
      </div>

      <input
        type="text"
        placeholder="Assunto"
        className="input w-full"
      />

      <textarea
        rows={4}
        className="textarea w-full"
        placeholder="Mensagem"
      />

    </div>

    <button
      type="submit"
      className="w-auto flex items-center gap-2 mt-4 p-2 bg-blue-700 hover:bg-blue-500 cursor-pointer text-white rounded-lg"
    >
      Enviar mensagem
      <IoIosSend size={17} />
    </button>
  </form>
</div>
    </section>
  )
}

export default Newslatter