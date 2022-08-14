import css from "../styles/team.module.scss";
function Team() {
  return <div className={css.team}>
        <div className={css.photoContainer1}>
        <div className={css.photo1}></div>
        <div className={css.photo2}></div>
            <span className={css.photoText}>
            <h5>MACIEJ KOWALONEK</h5> Fotograf z trzy letnim doświadczeniem w reportażu.
             Specjalizuje się w fotografii produktowej. Miłośnik fotografii
              koncertowej oraz twórca teledysków hip-hopowych. Uwielbia dobrze
               zaparzoną yerbę.
            </span>
        </div>
        <div className={css.photoContainer2}>
        <div className={css.photo3}></div>
        <div className={css.photo4}></div>
            <span className={css.photoText}>
            <h5>BARTOSZ KAKOWSKI</h5> Zapalony filmowiec oraz fotograf. W swojej pracy
             jest w stanie zauważyć i ukazać najmniejsze detale. Pasjonuje się
              fotografią motoryzacją oraz koncertową. Kocha dźwięk głośnego wydechu
               oraz zapach palonej gumy
            </span>
        </div>
        <div className={css.photoContainer3}>
        <div className={css.photo5}></div>
        <div className={css.photo6}></div>
            <span className={css.photoText}>
            <h5>LESŁAW KOPECKI</h5> Minimalista, miłośnik dobrych smaków, esteta.
             Znany przede wszystkim jako fotograf koncertowy. Zajmujący
              się się szeroko pojętym tworzeniem treści od zdjęć, poprzez
               filmy, aż po copywriting.
            </span>
        </div>
        <div className={css.photoContainer4}>
        <div className={css.photo7}></div>
        <div className={css.photo8}></div>
            <span className={css.photoText}>
            <h5>KACPER MIKUŁA</h5> Zapalony fotograf specjalizujący się w fotografii
             studyjnej oraz koncertowej. Lubi dobrą muzykę oraz szybkie auta.
              Okazjonalnie pomaga przy tworzeniu oraz montażu teledysków
            </span>
        </div>
        <div className={css.photoContainer5}>
        <div className={css.photo9}></div>
        <div className={css.photo10}></div>
            <span className={css.photoText}>
            <h5>MATEUSZ KUPŚ</h5> Główny filmowiec i montażysta w zespole. Jest autorem
             dziesiątek niezależnych filmów od komercyjnych poprzez fabuły
              kończąc na editach sportowych. Postprodukcja kolorów w video
               nie jest mu straszna. Hobbystycznie jeździ wyczynowo na rowerze.
            </span>
        </div>
        <div className={css.photoContainer6}>
            <div className={css.photo11}></div>
            <div className={css.photo12}></div>
            <span className={css.photoText}>
                <h5>KINGA DEJEWSKA</h5>Copywriterka i specjalistka od social mediów.
                W swoich fotografiach kocha zatrzymywać emocjonalne momenty.
                Uwielbia robić zdjęcia portretowe oraz koncertowe. Sport to jej drugie życie
            </span>
        </div>
        <div className={css.main}>
            <span className={css.textSpan}>
                Nasz zespół składa się z młodych, prężnie działających twórców 
                produkujących materiały na najwyższym poziomie. Sześciu 
                indywidualistów połączyło siły aby stworzyć Cube Media.
            </span>
        </div>
  </div>;
}

export default Team;