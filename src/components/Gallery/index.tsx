import galeriaHomem from "../../assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "../../assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "../../assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "../../assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoEPreto from "../../assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "../../assets/images/galeria-tenis-cinza.jpg";
import { Button } from "../Button";

export const Gallery = () => {
  return (
    <section
      className="container w-full grid gap-2.5 md:gap-7.5 

            grid-cols-2 grid-rows-[repeat(5,auto)]
            [grid-template-areas:'highlight_highlight''sneaker-white_sneaker-white''model_sneaker-color''model_sneaker-silver''sneaker-purple_sneaker-purple']

            md:grid-cols-4 md:grid-rows-3
            md:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple''highlight_highlight_model_sneaker-color''sneaker-white_sneaker-white_model_sneaker-silver']
            "
    >
      {/* 1 - Imagem do modelo masculino */}
      <div className="rounded-2xl overflow-hidden h-full w-full col-span-2 row-span-2 [grid-area:highlight] relative flex items-center justify-center">
        <img
          src={galeriaHomem}
          alt="Modelo masculino usando tênis"
          className="object-cover w-full h-full"
        />

        <div className="absolute text-white text-center">
          <h2 className="text-[20px] font-normal tracking-wide mb-2.5">
            Krypton One
          </h2>
          <p className="text-2xl mb-5 font-normal tracking-wide">
            Estilo urbano com atitude
          </p>
          <div className="flex gap-2.5 text-[20px]">
            <Button variant="secondary">Feminino</Button>
            <Button variant="secondary">Masculino</Button>
          </div>
        </div>
      </div>

      {/* 2 - imagem do sapato roxo */}
      <div className="rounded-2xl overflow-hidden h-full w-full [grid-area:sneaker-purple]">
        <img
          src={galeriaTenisRoxo}
          alt="Tênis roxo"
          className="object-cover w-full h-full"
        />
      </div>

      {/* 3 - imagem da modelo feminina */}
      <div className="rounded-2xl overflow-hidden h-full w-full [grid-area:model]">
        <img
          src={galeriaModelo}
          alt="Modelo feminina usando tênis"
          className="object-cover w-full h-full"
        />
      </div>

      {/* 4 - imagem do tenis colorido */}
      <div className="rounded-2xl overflow-hidden h-full w-full [grid-area:sneaker-color]">
        <img
          src={galeriaTenisColorido}
          alt="Tênis colorido"
          className="w-full h-full"
        />
      </div>

      {/* 5 - imagem do tenis preto e branco */}
      <div className="rounded-2xl overflow-hidden h-full w-full [grid-area:sneaker-white]">
        <img
          src={galeriaTenisBrancoEPreto}
          alt="Tênis preto e branco"
          className="object-cover w-full h-full"
        />
      </div>

      {/* 6 - imagem do tenis cinza */}
      <div className="rounded-2xl overflow-hidden h-full w-full [grid-area:sneaker-silver]">
        <img
          src={galeriaTenisCinza}
          alt="Tênis cinza"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};
