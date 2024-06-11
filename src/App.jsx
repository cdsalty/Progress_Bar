import ScrollProgressBar from './ScrollProgess';
import Navbar from './components/Navbar';
import braves_homepage from './assets/images/braves_homepage.jpeg';

const App = () => {
  return (
    <div className="flex items-center flex-col">
      <ScrollProgressBar />
      <Navbar />

      <div className="flex-col justify-center mt-[20px] max-w-2xl mx-4">
        <span className="text-blue-600 uppercase text-[11px]">
          Atlanta Braves
        </span>
        <h1 className="flex text-[40px] font-bold">
          No Braves broadcasts? Possible solutions and a lot of frustration to
          Comcast/Bally’s dispute
        </h1>
        <h2 className="pb-2">
          Reponses to AJC callout for how customers are watching the Braves.
        </h2>

        <img src={braves_homepage} alt="Disgruntled Braves Fan" />
        <div className="flex flex-col">
          {' '}
          <p className="m-[10px] flex self-end text-[#9b9b9b] text-[10px] ">
            Credit: arvin.temkar@ajc.com
          </p>
          <p className="text-[#9b9b9b] sm:text-[12px] md:text-[14px] text-left">
            John Gonzalez reacts in the ninth inning at the Braves home opening
            day game versus the Diamondbacks at Truist Park in Atlanta on
            Friday, April 5, 2024. (Arvin Temkar / arvin.temkar@ajc.com)
          </p>
          <div className="flex justify-between">
            <>
              <span className="font-medium pt-10">
                By{' '}
                <a
                  className="text-[14px] font-medium"
                  href="https://www.ajc.com/staff/chris-vivlamore/"
                >
                  Chris Vivlamore
                </a>
                <p className="text-[#9b9b9b] text-[11px] text-xs font-extralight pt-1">
                  May 6, 2024
                </p>
              </span>
              <div className="flex items-center justify-between p-2 gap-2">
                <a
                  href="/"
                  className="hover:cursor-pointer hover:text-blue-600"
                >
                  F
                </a>
                <a
                  href="/"
                  className="hover:cursor-pointer hover:text-blue-600"
                >
                  X
                </a>
                <a
                  href="/"
                  className="hover:cursor-pointer hover:text-blue-600"
                >
                  L
                </a>
              </div>
            </>
          </div>
          <div className="flex-col text-[16px] mt-4 leading-7 font-light pl-[30px]">
            <p className="text-4 pt-4 mb-[25px]">We Asked.</p>
            <p className="text-4 mb-[25px]">Many Answered.</p>

            <div>
              <p className="flex w-full h-44 bg-green-300 py-10 justify-center mb-[25px] align-middle">
                This is an Ad
              </p>
            </div>
            <div className="leading-8">
              <p className="leading-8 my-[25px]">
                The Atlanta Journal-Constitution put out a call at the end of
                last week when the Comcast/Bally’s dispute resulted in Braves
                games not being available on the cable television provider. We
                wanted to know how Braves fans were watching or keeping up with
                the team.
              </p>
              <p className="mb-[25px]">
                We got some possible solutions. We got some cutting of the cord
                all together. We got a whole lot of disappointment and
                frustration.
              </p>
              <p className="mb-[25px]">
                Here is a selection of some of the many responses. We have
                identified respondents by just their first names. Some did not
                want to be identified.
              </p>
              <p className="mb-[25px]">****</p>
              <p className="mb-[25px]">
                “I signed up for Fubo TV. So, I’m paying $94 per month just to
                watch the Braves.”{' '}
                <span className="inline font-semibold">- Ron</span>
              </p>
              <div>
                <p className="flex w-full h-44 bg-green-300 py-10 justify-center mb-[25px] align-middle">
                  This is an Ad
                </p>
              </div>
              <p className="mb-[25px]">***</p>
              <p className="mb-[25px]">
                “Braves lost a viewer. It is way too hard to navigate alternate
                viewing. Hard on us retirees who are long-time fans. Sad.”{' '}
                <span className="inline font-semibold">- Mary</span>
              </p>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              eos est at accusantium ipsa ex id, alias repellendus obcaecati ea
              maxime ut excepturi. Doloremque dolore dolor necessitatibus
              adipisci dignissimos debitis consequatur delectus beatae, aliquid
              quos natus facilis repudiandae possimus mollitia aspernatur
              eligendi ipsam corrupti amet minus cum voluptatibus soluta esse
              sint. Corrupti molestiae, necessitatibus earum veniam suscipit
              praesentium! Impedit ducimus dolores animi adipisci voluptatem,
              saepe perferendis qui suscipit nesciunt illum amet aliquid vitae
              ut aut accusantium quos hic harum ad eum soluta! Dolores deleniti
              mollitia vitae repellat odit molestiae, et sunt. Vitae molestias
              ipsum a quis corporis. A rem quo accusamus illo sed pariatur esse
              ab ad officia quidem quaerat, dolore dicta obcaecati! Aliquid
              alias, pariatur fugit error recusandae deserunt dolorem cumque quo
              dolores nihil ipsa molestiae nisi ducimus ipsam voluptatem earum
              molestias esse accusamus, ut consequatur consectetur incidunt
              optio! Temporibus asperiores laudantium repellendus impedit nam
              dolores, sint explicabo non ex provident, eius fugiat itaque sed
              magnam dicta tempora assumenda quos vero blanditiis aliquid ab!
              Cupiditate optio, voluptatem repellendus at ullam, quis ipsa
              dolorum voluptatum alias, commodi magni quo nihil sint dicta
              reprehenderit quasi sit molestias error laborum deserunt. Ipsa
              laboriosam tempore, nemo facilis quidem inventore vero veniam
              iusto ab cum ea voluptatem repellendus odio exercitationem
              molestias aliquid quasi quibusdam nisi recusandae eos fuga quis
              voluptatibus? Illo unde labore similique eligendi inventore
              recusandae? Minima eligendi doloremque eum dolorem neque ex,
              fugiat commodi incidunt? Similique culpa natus, aperiam beatae
              sunt optio quia nisi, soluta mollitia consectetur, fugit nostrum
              hic perspiciatis facere porro. Ab, nam. Delectus accusantium alias
              eveniet et odit cupiditate, rem totam nisi magnam asperiores
              beatae, nihil atque aliquid reiciendis, praesentium excepturi
              itaque esse molestias. Mollitia ab quis distinctio eius unde
              repellat molestias dolorum? Deserunt, beatae quaerat eaque aliquid
              optio quam eveniet vel cum quia fuga, ex necessitatibus
              voluptatibus quae? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Corporis eos est at accusantium ipsa ex id,
              alias repellendus obcaecati ea maxime ut excepturi. Doloremque
              dolore dolor necessitatibus adipisci dignissimos debitis
              consequatur delectus beatae, aliquid quos natus facilis
              repudiandae possimus mollitia aspernatur eligendi ipsam corrupti
              amet minus cum voluptatibus soluta esse sint. Corrupti molestiae,
              necessitatibus earum veniam suscipit praesentium! Impedit ducimus
              dolores animi adipisci voluptatem, saepe perferendis qui suscipit
              nesciunt illum amet aliquid vitae ut aut accusantium quos hic
              harum ad eum soluta! Dolores deleniti mollitia vitae repellat odit
              molestiae, et sunt. Vitae molestias ipsum a quis corporis. A rem
              quo accusamus illo sed pariatur esse ab ad officia quidem quaerat,
              dolore dicta obcaecati! Aliquid alias, pariatur fugit error
              recusandae deserunt dolorem cumque quo dolores nihil ipsa
              molestiae nisi ducimus ipsam voluptatem earum molestias esse
              accusamus, ut consequatur consectetur incidunt optio! Temporibus
              asperiores laudantium repellendus impedit nam dolores, sint
              explicabo non ex provident, eius fugiat itaque sed magnam dicta
              tempora assumenda quos vero blanditiis aliquid ab! Cupiditate
              optio, voluptatem repellendus at ullam, quis ipsa dolorum
              voluptatum alias, commodi magni quo nihil sint dicta reprehenderit
              quasi sit molestias error laborum deserunt. Ipsa laboriosam
              tempore, nemo facilis quidem inventore vero veniam iusto ab cum ea
              voluptatem repellendus odio exercitationem molestias aliquid quasi
              quibusdam nisi recusandae eos fuga quis voluptatibus? Illo unde
              labore similique eligendi inventore recusandae? Minima eligendi
              doloremque eum dolorem neque ex, fugiat commodi incidunt?
              Similique culpa natus, aperiam beatae sunt optio quia nisi, soluta
              mollitia consectetur, fugit nostrum hic perspiciatis facere porro.
              Ab, nam. Delectus accusantium alias eveniet et odit cupiditate,
              rem totam nisi magnam asperiores beatae, nihil atque aliquid
              reiciendis, praesentium excepturi itaque esse molestias. Mollitia
              ab quis distinctio eius unde repellat molestias dolorum? Deserunt,
              beatae quaerat eaque aliquid optio quam eveniet vel cum quia fuga,
              ex necessitatibus voluptatibus quae? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Corporis eos est at accusantium
              ipsa ex id, alias repellendus obcaecati ea maxime ut excepturi.
              Doloremque dolore dolor necessitatibus adipisci dignissimos
              debitis consequatur delectus beatae, aliquid quos natus facilis
              repudiandae possimus mollitia aspernatur eligendi ipsam corrupti
              amet minus cum voluptatibus soluta esse sint. Corrupti molestiae,
              necessitatibus earum veniam suscipit praesentium! Impedit ducimus
              dolores animi adipisci voluptatem, saepe perferendis qui suscipit
              nesciunt illum amet aliquid vitae ut aut accusantium quos hic
              harum ad eum soluta! Dolores deleniti mollitia vitae repellat odit
              molestiae, et sunt. Vitae molestias ipsum a quis corporis. A rem
              quo accusamus illo sed pariatur esse ab ad officia quidem quaerat,
              dolore dicta obcaecati! Aliquid alias, pariatur fugit error
              recusandae deserunt dolorem cumque quo dolores nihil ipsa
              molestiae nisi ducimus ipsam voluptatem earum molestias esse
              accusamus, ut consequatur consectetur incidunt optio! Temporibus
              asperiores laudantium repellendus impedit nam dolores, sint
              explicabo non ex provident, eius fugiat itaque sed magnam dicta
              tempora assumenda quos vero blanditiis aliquid ab! Cupiditate
              optio, voluptatem repellendus at ullam, quis ipsa dolorum
              voluptatum alias, commodi magni quo nihil sint dicta reprehenderit
              quasi sit molestias error laborum deserunt. Ipsa laboriosam
              tempore, nemo facilis quidem inventore vero veniam iusto ab cum ea
              voluptatem repellendus odio exercitationem molestias aliquid quasi
              quibusdam nisi recusandae eos fuga quis voluptatibus? Illo unde
              labore similique eligendi inventore recusandae? Minima eligendi
              doloremque eum dolorem neque ex, fugiat commodi incidunt?
              Similique culpa natus, aperiam beatae sunt optio quia nisi, soluta
              mollitia consectetur, fugit nostrum hic perspiciatis facere porro.
              Ab, nam. Delectus accusantium alias eveniet et odit cupiditate,
              rem totam nisi magnam asperiores beatae, nihil atque aliquid
              reiciendis, praesentium excepturi itaque esse molestias. Mollitia
              ab quis distinctio eius unde repellat molestias dolorum? Deserunt,
              beatae quaerat eaque aliquid optio quam eveniet vel cum quia fuga,
              ex necessitatibus voluptatibus quae? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Corporis eos est at accusantium
              ipsa ex id, alias repellendus obcaecati ea maxime ut excepturi.
              Doloremque dolore dolor necessitatibus adipisci dignissimos
              debitis consequatur delectus beatae, aliquid quos natus facilis
              repudiandae possimus mollitia aspernatur eligendi ipsam corrupti
              amet minus cum voluptatibus soluta esse sint. Corrupti molestiae,
              necessitatibus earum veniam suscipit praesentium! Impedit ducimus
              dolores animi adipisci voluptatem, saepe perferendis qui suscipit
              nesciunt illum amet aliquid vitae ut aut accusantium quos hic
              harum ad eum soluta! Dolores deleniti mollitia vitae repellat odit
              molestiae, et sunt. Vitae molestias ipsum a quis corporis. A rem
              quo accusamus illo sed pariatur esse ab ad officia quidem quaerat,
              dolore dicta obcaecati! Aliquid alias, pariatur fugit error
              recusandae deserunt dolorem cumque quo dolores nihil ipsa
              molestiae nisi ducimus ipsam voluptatem earum molestias esse
              accusamus, ut consequatur consectetur incidunt optio! Temporibus
              asperiores laudantium repellendus impedit nam dolores, sint
              explicabo non ex provident, eius fugiat itaque sed magnam dicta
              tempora assumenda quos vero blanditiis aliquid ab! Cupiditate
              optio, voluptatem repellendus at ullam, quis ipsa dolorum
              voluptatum alias, commodi magni quo nihil sint dicta reprehenderit
              quasi sit molestias error laborum deserunt. Ipsa laboriosam
              tempore, nemo facilis quidem inventore vero veniam iusto ab cum ea
              voluptatem repellendus odio exercitationem molestias aliquid quasi
              quibusdam nisi recusandae eos fuga quis voluptatibus? Illo unde
              labore similique eligendi inventore recusandae? Minima eligendi
              doloremque eum dolorem neque ex, fugiat commodi incidunt?
              Similique culpa natus, aperiam beatae sunt optio quia nisi, soluta
              mollitia consectetur, fugit nostrum hic perspiciatis facere porro.
              Ab, nam. Delectus accusantium alias eveniet et odit cupiditate,
              rem totam nisi magnam asperiores beatae, nihil atque aliquid
              reiciendis, praesentium excepturi itaque esse molestias. Mollitia
              ab quis distinctio eius unde repellat molestias dolorum? Deserunt,
              beatae quaerat eaque aliquid optio quam eveniet vel cum quia fuga,
              ex necessitatibus voluptatibus quae? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Corporis eos est at accusantium
              ipsa ex id, alias repellendus obcaecati ea maxime ut excepturi.
              Doloremque dolore dolor necessitatibus adipisci dignissimos
              debitis consequatur delectus beatae, aliquid quos natus facilis
              repudiandae possimus mollitia aspernatur eligendi ipsam corrupti
              amet minus cum voluptatibus soluta esse sint. Corrupti molestiae,
              necessitatibus earum veniam suscipit praesentium! Impedit ducimus
              dolores animi adipisci voluptatem, saepe perferendis qui suscipit
              nesciunt illum amet aliquid vitae ut aut accusantium quos hic
              harum ad eum soluta! Dolores deleniti mollitia vitae repellat odit
              molestiae, et sunt. Vitae molestias ipsum a quis corporis. A rem
              quo accusamus illo sed pariatur esse ab ad officia quidem quaerat,
              dolore dicta obcaecati! Aliquid alias, pariatur fugit error
              recusandae deserunt dolorem cumque quo dolores nihil ipsa
              molestiae nisi ducimus ipsam voluptatem earum molestias esse
              accusamus, ut consequatur consectetur incidunt optio! Temporibus
              asperiores laudantium repellendus impedit nam dolores, sint
              explicabo non ex provident, eius fugiat itaque sed magnam dicta
              tempora assumenda quos vero blanditiis aliquid ab! Cupiditate
              optio, voluptatem repellendus at ullam, quis ipsa dolorum
              voluptatum alias, commodi magni quo nihil sint dicta reprehenderit
              quasi sit molestias error laborum deserunt. Ipsa laboriosam
              tempore, nemo facilis quidem inventore vero veniam iusto ab cum ea
              voluptatem repellendus odio exercitationem molestias aliquid quasi
              quibusdam nisi recusandae eos fuga quis voluptatibus? Illo unde
              labore similique eligendi inventore recusandae? Minima eligendi
              doloremque eum dolorem neque ex, fugiat commodi incidunt?
              Similique culpa natus, aperiam beatae sunt optio quia nisi, soluta
              mollitia consectetur, fugit nostrum hic perspiciatis facere porro.
              Ab, nam. Delectus accusantium alias eveniet et odit cupiditate,
              rem totam nisi magnam asperiores beatae, nihil atque aliquid
              reiciendis, praesentium excepturi itaque esse molestias. Mollitia
              ab quis distinctio eius unde repellat molestias dolorum? Deserunt,
              beatae quaerat eaque aliquid optio quam eveniet vel cum quia fuga,
              ex necessitatibus voluptatibus quae? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Corporis eos est at accusantium
              ipsa ex id, alias repellendus obcaecati ea maxime ut excepturi.
              Doloremque dolore dolor necessitatibus adipisci dignissimos
              debitis consequatur delectus beatae, aliquid quos natus facilis
              repudiandae possimus mollitia aspernatur eligendi ipsam corrupti
              amet minus cum voluptatibus soluta esse sint. Corrupti molestiae,
              necessitatibus earum veniam suscipit praesentium! Impedit ducimus
              dolores animi adipisci voluptatem, saepe perferendis qui suscipit
              nesciunt illum amet aliquid vitae ut aut accusantium quos hic
              harum ad eum soluta! Dolores deleniti mollitia vitae repellat odit
              molestiae, et sunt. Vitae molestias ipsum a quis corporis. A rem
              quo accusamus illo sed pariatur esse ab ad officia quidem quaerat,
              dolore dicta obcaecati! Aliquid alias, pariatur fugit error
              recusandae deserunt dolorem cumque quo dolores nihil ipsa
              molestiae nisi ducimus ipsam voluptatem earum molestias esse
              accusamus, ut consequatur consectetur incidunt optio! Temporibus
              asperiores laudantium repellendus impedit nam dolores, sint
              explicabo non ex provident, eius fugiat itaque sed magnam dicta
              tempora assumenda quos vero blanditiis aliquid ab! Cupiditate
              optio, voluptatem repellendus at ullam, quis ipsa dolorum
              voluptatum alias, commodi magni quo nihil sint dicta reprehenderit
              quasi sit molestias error laborum deserunt. Ipsa laboriosam
              tempore, nemo facilis quidem inventore vero veniam iusto ab cum ea
              voluptatem repellendus odio exercitationem molestias aliquid quasi
              quibusdam nisi recusandae eos fuga quis voluptatibus? Illo unde
              labore similique eligendi inventore recusandae? Minima eligendi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

console.log(
  'Thank you for your time today. This is a fantastic opportunity and I would love the chance to apart of your team! If there is anything else I can do better, please reach out via email to soltiscd@gmail.com'
);

console.log(
  'Further stretch goals: adjust text sizes and adjust spacing to be more mobile friendly, update Facebook, Twitter and copy link. I also would add a pop-up/modal for hamburger menu.'
);
