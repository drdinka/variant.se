import Head from 'next/head';
import Link from 'next/link';
import Layout from 'src/layout';
import style from '../invitations.module.css';

function MainInfo() {
  return (
    <>
      <div>
        <h3 className="fancy">Styrkesamtale</h3>
        <img
          className={style.right_image}
          src="/images/tonje.png"
          alt="Tonje Evanger"
        />
        <p>
          Som du sikkert er klar over baserer vi vår medarbeiderutvikling på
          positiv psykologi og legger styrkebasert utvikling til grunn for
          hvordan vi ønsker bygge varianter. Første ledd i en slik utvikling er
          å kartlegge våre styrker og våre verdier. Dette gjør vi for alle
          mennesker i selskapet gjennom en styrkesamtale.
        </p>

        <p className={style.prep}>
          Til samtalen ønsker vi at du tenker igjennom: I hvilke situasjoner er
          du mest motivert? Hva gjør at du blir frustrert, irritert eller sint?
          Hvordan liker du å løse utfordringer?
        </p>
        <p>
          Tonje kommer til å gjennomføre denne samtalen, og som et resultat får
          du ditt eget styrkekart.
        </p>
      </div>

      <div>
        <h3 className="fancy">Samarbeidscase - Execution plan - year one</h3>
        <p>
          En forutsetning for å lykkes i Stockhom er at vi klarer å få en god start. 
          Vi har derfor lyst til at å kjøre et samarbeidscase på
          hvordan vi kan utvikle en god, troverdig og passe ambisiøs 
          opperativ plan for det første året i Stockholm.
        </p>

        <p>
          Bruk av medeierskap er et virkemiddel vi har god erfaring med. Dette
          ble også beskrevet i{' '}
          <Link href="/jobs/vd-i-variant-stockholm">utlysningen</Link> til
          stillingen. Hva er dine tanker over hvordan dette kan løses?
        </p>

        <p className={style.prep}>
          Til caset ønsker vi at du forbereder en innledning der du forteller
          litt om dine tanker rundt Stockholms føste år. Hvilke mål skal vi sette oss, 
          og hvordan skal vi nå disse målene.  Format er helt opp til deg. Lengden bør 
          ikke være mer enn 10 minutter, og kort er bedre enn langt.
        </p>

        <p>
          Etter din innledning vil du, Tonje, Anders, Marius og Odd Morten
          spinne videre på dine tanker. Jacob stiller som observatør. Vi kommer
          til å utfordre eller male videre, og ønsker at du gjør det samme.
          Altså slik vi faktisk kommer til å jobbe når vi samarbeider om å bygge
          et selskap i framtiden. Idéer som du bringer til torgs, skal vi ikke
          stjele.
        </p>

        <div className={style.profileBlock}>
          <img
            className={style.profileImage}
            src="/images/jacob.png"
            alt="Jacob Berglund"
          />

          <img
            className={style.profileImage}
            src="/images/anders.png"
            alt="Anders Hammervold"
          />

          <img
            className={style.profileImage}
            src="/images/odd-morten.png"
            alt="Odd Morten Sveås"
          />

          <img
            className={style.profileImage}
            src="/images/marius.png"
            alt="Marius Krakeli"
          />
        </div>
        <p>
          Vi tror samarbeidsevne og kompabilitet med resten av konsernledelsen
          er en nøkkel til å lykkes. Hovedpoenget med denne sesjonen er derfor å
          se på hvordan vi samarbeider. Hvordan vi klarer å utnytte hverandres
          potensial. Hvordan ditt samspill i gruppen vil være. Sluttproduktet,
          hvis vi kommer så langt, kommer vi ikke til å evaluere.
        </p>
      </div>

      <div>
        <h3 className="fancy">Utlegg</h3>
        <p>
          Vi setter stor pris på at du er villig til å bruke en dag på oss her i
          Trondheim. Vi dekker selvsagt kostnader til selve reisen. Vi ber deg
          derfor å legge ut for turen, og så sende oss kopi av kvitteringer
          sammen med bankkontonummer på mail til{' '}
          <a
            href="mailto:faktura.norge@variant.no?subject=Utlegg i forbindelse med intervju&body=Vedlagt kvitteringer for min reise til Trondheim i forbindelse med intervju.%0D%0A
                %0D%0A
                Utbetales til kontonr:  %0D%0A
                SWIFT:"
          >
            faktura.norge@variant.no
          </a>
        </p>
      </div>
    </>
  );
}

export default function Invitation() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Velkommen til Trondheim</title>
        </Head>
        <section className={style.omVariant}>
          <header>
            <h2 className={style.omVariant__title}>Velkommen Lisa!</h2>
          </header>
          <div>
            <p>
              Det er med stor glede vi inviterer til en liten dag hos oss på
              Varianthuset i Trondheim 24. januar. Målet med dagen er å bli
              bedre kjent med deg, men også at du får truffet flere av oss.
              Adressen er Thomas Angells gate 10. Det er midt i sentum.
            </p>
          </div>

          <div>
            <h3 className="fancy">Tidsplan 24. januar</h3>
            <ul className={style.agenda}>
              <li>
                <span className={style.time}>12.00-13.00</span> 💪🏻 Styrkesamtale
              </li>
              <li>
                <span className={style.time}>13.30-15.30</span> 👩‍👦‍👦
                Samarbeidscase{' '}
              </li>
              <li>
                <span className={style.time}>16.00-18.00</span> 🥘 Enkel middag på Brasserie Britannia 
              </li>
            </ul>
          </div>

          <MainInfo />
        </section>
      </div>
    </Layout>
  );
}
