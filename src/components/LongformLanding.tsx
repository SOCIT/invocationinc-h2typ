import { stackProduct } from "@/lib/products";
import { BuyButton } from "./BuyButton";
import { Countdown } from "./Countdown";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { StackPrice } from "./StackPrice";
import { StickyBar } from "./StickyBar";

export function LongformLanding() {
  return (
    <>
      <div className="lf-bar">
        FULL SYSTEM IS <s className="lf-was">{stackProduct.listPriceDisplay}</s>{" "}
        — TODAY IT IS{" "}
        <span className="lf-now">{stackProduct.priceDisplay}</span> — TIMER:{" "}
        <Countdown id="timerTop" className="lf-timer" />
      </div>
      <Header />
      <main id="main" className="lf-wrap">
        <p className="lf-stamp">
          If you are not genuinely happy and cannot figure out why — which room do
          you live in?
        </p>
        <h1>
          You don’t control your emotions. Eight Weeks to Happy gives you that
          control.
        </h1>
        <p className="lf-lead">
          Life coaches ask you to want to change. Therapists ask you to wait for
          slow, gradual change. Posters ask you to smile on purpose. None of them
          have you measure your mood and hand you a tool to change it on command.
        </p>
        <p>
          Eight Weeks to Happy from Invocation Inc. A system that teaches your
          brain to control your emotions instead of suffering them — or to
          leverage them if you are not suffering. Book is the Why. Workbook and
          app are the same Work: paper or phone. Instant files. Instant app. Not
          a subscription.
        </p>
        <p>
          The Full System in person is $10,000. Book + workbook/app is{" "}
          <strong>$97</strong>. Today it is <strong>$47</strong> — and here is
          the honest reason: our coaching clients are under NDA. They cannot
          talk. This page has no testimonials because the first public
          scoreboards will come from buyers on this page, and the price climbs
          with each one. The clock started when you opened this page.
          Twenty-four hours.
        </p>
        <div className="lf-cta">
          <p className="lf-cta-kicker">
            The <s className="lf-was">{stackProduct.listPriceDisplay}</s> Full
            System is <span className="lf-now">{stackProduct.priceDisplay}</span>{" "}
            for
          </p>
          <p className="lf-timer-hero">
            <Countdown id="timerHero" />
          </p>
          <BuyButton
            productId="stack"
            label={
              <>
                Get the Full System — <StackPrice />
              </>
            }
          />
          <BuyButton
            productId="book"
            variant="ghost"
            label="Just the book — $9.99"
          />
        </div>

        <h2>The room does not care that you understood the method</h2>
        <p>You already know which room you live in. Which one is it?</p>
        <div className="lf-room">
          <strong>Room one — no control.</strong> The baseline is a negative
          emotional state. Anger. Anxiety. Depression. Or the quiet version
          nobody puts on a mug: you do not trust yourself to do the thing in
          front of you. The day starts behind. Coffee does not give you control.
          A walk does not give you control. “I’ll start Monday” is no control
          talking.
        </div>
        <div className="lf-room">
          <strong>Room two — you snap.</strong> Fine until you are not. YOU snap.
          YOU panic. YOU hand the state off to whoever is standing there like it
          is their job to hold it. Then you apologize. Then you wait to feel like
          a better person. Then it happens again in a grocery store parking lot.
        </div>
        <div className="lf-room">
          <strong>Room three — when no one is looking you are miserable.</strong>{" "}
          You pay bills. You show up. People think you are fine. When no one is
          looking you are miserable. You look successful and feel like a rented
          suit.
        </div>
        <p>
          If a slogan could fix your emotions, the rooms would be empty and the
          self-help aisle would be a museum.
        </p>
        <p>
          You have done the posters. The five-minute journals that became
          five-week paperweights. The app with the pastel breathing circle. The
          podcast that made you nod in the car and change nothing in the kitchen.
        </p>
        <p>
          Here is the ugly part: understanding is not the switch. You can explain
          your childhood at dinner and still wake up with no control of your
          emotions. Insight is cheap. True change to being in control is not.
        </p>
        <div className="lf-cta">
          <BuyButton
            productId="stack"
            label={
              <>
                Buy the Full System — <StackPrice />
              </>
            }
          />
        </div>

        <h2>
          If it can be observed, it can be measured. If it can be measured, it
          can be improved.
        </h2>
        <p>Measuring and improving beats assuming.</p>
        <p>
          Invocation Inc is not a wellness brand. We are Human Performance
          Engineers. Mood is treated like a number on a machine: observe it, mark
          it, change the inputs, watch the output. That sentence makes polite
          people uncomfortable. Good. Being polite never gave you control.
        </p>
        <p>
          “You have to desire change in order to change” is a lie. Crash,
          airbag, doctor’s face, scan — you did not want those. They changed you
          in the moment. Change can be instant.
        </p>
        <p>
          SmileBell™ and CalmBell™ are results, not ritual. A Bell is a trigger
          you named and placed. Trigger yourself on purpose. Kinesthetic,
          verbal, and visual cues. You fire happy or calm on purpose. You control
          your emotions. Do not obsess over the collarbone.
        </p>
        <p>At the end of the week you do the math the workbook will not let you skip:</p>
        <p className="lf-center">
          <strong>Number = positives − (negatives × 2)</strong>
        </p>
        <p>
          Negative emotions have up to twice the power of positive ones. One
          angry person moves the room farther than one happy person. That is why
          the formula doubles the negatives — the math is honest about the
          weight.
        </p>
        <p>
          The number is who you are emotionally. If you hate the number, you
          finally told the truth. Now you can fix it. This is your life. Control
          it.
        </p>
        <p>
          The system installs the Bells, then changes what you have heard from
          yourself and everyone around you — Self, Relationships, Career, Money.
          The book is the why. The workbook or the app is the same Work, two
          surfaces.
        </p>
        <p>
          That is the whole plot. Not a retreat. Emotional control. A switch you
          set. Phrases and symbols. A log so you cannot lie.
        </p>
        <p>
          Yes it works. Our coaching clients are under NDA, so we will not paste
          borrowed wins or fake five-stars. When real scoreboards from buyers on
          this page arrive, the price rises.
        </p>
        <div className="lf-cta">
          <p className="lf-tiny" style={{ marginTop: 0 }}>
            Clock still running.
          </p>
          <p className="lf-timer-story">
            <Countdown id="timerStory" />
          </p>
          <BuyButton
            productId="stack"
            label={
              <>
                Unlock the Full System — <StackPrice />
              </>
            }
          />
        </div>

        <h2>The villains (they are not evil. They are slow.)</h2>
        <p>
          <strong>Coaching</strong> needs desire. If desire were enough you would
          not be on a landing page bargaining with a red button.
        </p>
        <p>
          <strong>Therapy</strong> is slow by design. Some of you need it. If you
          need a clinician, get one first. Then come back. We are not competing
          with your psychiatrist. We are not a substitute. We are a practice.
        </p>
        <p>
          <strong>Pharma</strong> can be a recurring bandaid for a mind-driven
          problem. You do not subscribe to a refill. You fix it and regain
          control of your emotions.
        </p>
        <p>
          <strong>The poster industry</strong> sold you the destination photo and
          hid the sets. SmileBell™ is not a poster. If you will not set the
          Bells, the rest of this page is stationery.
        </p>
        <div className="lf-letter">
          <p style={{ margin: 0 }}>
            <strong>Plain talk, once:</strong> This is not therapy. Not medical
            advice. Not a cure for depression, anxiety, panic, trauma, or
            anything a licensed person treats. Bells are a temporary nudge — not
            permanent happiness, not permanent calm. Results require the work.
            Invocation Inc is not a licensed medical or therapy practice.
          </p>
        </div>

        <h2>The unique mechanism (memorize this or leave)</h2>
        <ol>
          <li>
            <strong>Set the Bells.</strong> SmileBell™ or CalmBell™. Kinesthetic,
            verbal, and visual cues.
          </li>
          <li>
            <strong>Mark the day.</strong> A log so you cannot lie.
          </li>
          <li>
            <strong>Speak the new lines.</strong> Present-tense. Out loud.
          </li>
        </ol>
        <p>
          After Week 1 the daily work is simple on purpose: fire calm or happy →
          log → say the line → do the Three Things.
        </p>
        <p>
          Instant, not overnight. Airbag. Trip. Car. Plane. Doctor’s face. Scan.
          You did not wait to feel ready. The state changed in the moment.
        </p>
        <div className="lf-cta">
          <BuyButton
            productId="stack"
            label={
              <>
                Take the Full System — <StackPrice />
              </>
            }
          />
        </div>

        <h2>Why we will not sell you the workbook by itself</h2>
        <p>
          Because amateurs stay out of control and tell everyone it is
          impossible.
        </p>
        <p>
          The workbook and the app do the same job. Paper or phone. You pick one
          log.
        </p>
        <p>
          This is not souvenirs. Not objects. Control of emotions. Body cues. New
          language. A log.
        </p>
        <p>
          The book is the Why. The workbook or the app is the Work. There is no
          workbook-only button. You want the Work, you take the Full System.
        </p>
        <p>
          You can still buy only the book for $9.99. The book is the sled labeled
          not-for-roads. It tells you what to do. It will not execute it.
        </p>

        <h2>The eight weeks — no montage</h2>
        <div className="lf-week">
          <b>Week 0 — Setup</b>
          Name. Dates. Room. Color. Symbol. The sentence that brought you here.
          Six turns. Mark code. The app is where the log lives.
        </div>
        <div className="lf-week">
          <b>Week 1 — Install</b>
          Collarbone. First set. Second set. Tests: none / subtle / clear. Tally
          Calm sets, Smile sets, fires. If you skip Week 1, Weeks 4–8 are fan
          fiction.
        </div>
        <div className="lf-week">
          <b>Week 2 — Measure</b>
          Six marks. Spikes. Bell after the stroke. Do not invent pluses to look
          recovered.
        </div>
        <div className="lf-week">
          <b>Week 3 — Math + dose</b>
          Count +, 0, −. Run the formula. Schedule elicitation off the number,
          not off the weather in your chest.
        </div>
        <div className="lf-week">
          <b>Week 4 — Self</b>
          Forgiveness work on a timeline. First Change Statement aimed at you.
          Present tense. A line you can say while washing a plate.
        </div>
        <div className="lf-week">
          <b>Week 5 — Relationships</b>
          Unspoken expectations out of the dark. A statement for how the people
          closest to you experience you.
        </div>
        <div className="lf-week">
          <b>Week 6 — Career + DoTo</b>
          Work statement. The unfinished pile, dated. Career without a DoTo is a
          TED talk you give yourself in the shower.
        </div>
        <div className="lf-week">
          <b>Week 7 — Money</b>
          Present-tense money line. Aimed invocations. Practice past the part of
          you that wants to negotiate with reality.
        </div>
        <div className="lf-week">
          <b>Week 8 — Input = Output</b>
          Speak the full set of lines. Surround the hours with what you want out.
          The files end. The work does not.
        </div>
        <div className="lf-cta">
          <BuyButton
            productId="stack"
            label={
              <>
                Get the Full System — <StackPrice />
              </>
            }
          />
        </div>

        <h2>Who should buy. Who should close the tab.</h2>
        <h3>Buy if</h3>
        <ul>
          <li>You can point to Room 1, 2, or 3 without a TED talk.</li>
          <li>You will set the Bells even when it feels simple.</li>
          <li>You will mark six turns even when the mark is ugly.</li>
          <li>You will say a present-tense line out loud like an adult.</li>
          <li>
            You sell, lead, parent, partner, or work next to humans and need
            language that moves a room instead of decorating it.
          </li>
        </ul>
        <h3>Leave if</h3>
        <ul>
          <li>You wanted a magic spell. A wizard.</li>
          <li>You think you must desire change in order to change.</li>
          <li>You will not do the work. Reading is a poster.</li>
          <li>You need a clinician first. Go. Then come back.</li>
          <li>
            You cannot feel your emotions at all. Some brain injuries and
            neurological conditions block the signal this system installs onto —
            no signal, nothing to install. We do not want that money.
          </li>
        </ul>

        <h2 id="offer">
          The Full System — $10,000 in the room. <StackPrice /> today.
        </h2>
        <div className="lf-offer-box">
          <span className="lf-badge">
            24-hour window from the second you opened this page
          </span>
          <h3 style={{ marginTop: 14 }}>THE FULL SYSTEM</h3>
          <div className="lf-price-row">
            <StackPrice compact={false} />
          </div>
          <p>
            Book + workbook/app. Same Work, two surfaces. In person this sold for
            $10,000. <StackPrice /> today while the 24h clock runs.
          </p>
          <ul style={{ textAlign: "left", display: "inline-block" }}>
            <li>EW2H book (PDF + EPUB)</li>
            <li>EW2H workbook (PDF)</li>
            <li>
              Companion app — Week 0, Week 1 Bell tally, Weeks 2–8 log, Alter,
              scoreboard
            </li>
            <li>The ugly guarantee below</li>
          </ul>
          <p className="lf-timer-offer">
            <Countdown id="timerOffer" />
          </p>
          <BuyButton
            productId="stack"
            label={
              <>
                Buy the Full System — <StackPrice />
              </>
            }
          />
          <p className="lf-tiny">
            When testimonials land, this button becomes $57, then $67, then $77,
            then $87, then $97. The clock is not a metaphor.
          </p>
        </div>
        <div className="lf-offer-box lf-offer-book" id="book">
          <h3>THE WHY — $9.99 — book</h3>
          <div className="lf-price-row">
            <span className="lf-now" style={{ color: "#fff", fontSize: 36 }}>
              $9.99
            </span>
          </div>
          <p>Tells you what to do. Will not execute it.</p>
          <BuyButton
            productId="book"
            variant="ghost"
            label="Just the book — $9.99"
          />
        </div>

        <h2>If-all (say these out loud if you are still scrolling)</h2>
        <p>
          If all this did was hand you a switch for the one day that decides the
          quarter — the pitch, the interview, the hard conversation — instead of
          white-knuckling it, what is that day worth?
        </p>
        <p>
          If all this did was end the 11pm replay — the argument you keep
          re-litigating in the shower — because you fired calm on purpose and
          the loop never started, what is a year of sleep worth?
        </p>
        <p>
          If all this did was stop one snap — one raised voice at the person
          closest to you that you can never unsay — what is that apology you
          never have to make worth?
        </p>
        <div className="lf-cta">
          <BuyButton
            productId="stack"
            label={
              <>
                Unlock the Full System — <StackPrice />
              </>
            }
          />
        </div>

        <h2>Guarantee / anti-guarantee</h2>
        <ul>
          <li>
            <strong>File broken:</strong> won’t open — replace or refund.
          </li>
          <li>
            <strong>You did the work:</strong> Bells set, statements with
            symbols, log kept, eight weeks, nothing moved — email photos,
            screenshots, copies of the log. Refund. We will proudly fail.
          </li>
          <li>
            <strong>You skipped setting the Bells:</strong> no refund. Skip
            setting the Bells and the guarantee dies.
          </li>
        </ul>

        <h2>The questions you are about to email anyway</h2>
        <div className="lf-faq">
          <strong>I’ll start when I feel ready.</strong>
          <br />
          Ready is waiting to feel in control. The Bells do not require it.
        </div>
        <div className="lf-faq">
          <strong>I journal already.</strong>
          <br />A journal is a diary. This is a scoreboard that refuses fake
          pluses.
        </div>
        <div className="lf-faq">
          <strong>Is the app a subscription?</strong>
          <br />
          No. Included in the Full System. Data on the device. Beta means we
          sharpen the cards. It does not mean we bill you next month.
        </div>
        <div className="lf-faq">
          <strong>Why $47 if it is “really” $97?</strong>
          <br />
          Our coaching clients are under NDA, so this page launches with zero
          testimonials. The first public scoreboards come from buyers here, and
          the price climbs with each one. $47 is the before-proof price.
        </div>
        <div className="lf-faq">
          <strong>Why a timer?</strong>
          <br />
          In person this sold for $10,000. Every real review moves the public
          price toward that. Any day, this 24h window, we can raise it.
        </div>
        <div className="lf-faq">
          <strong>Workbook only?</strong>
          <br />
          No. The workbook and the app do the same job. Paper or phone. Stop
          asking.
        </div>
        <div className="lf-faq">
          <strong>Is this therapy?</strong>
          <br />
          No. Talk to your therapist. We did, with dozens, before release.
        </div>
        <div className="lf-warn">
          <h2>Warning</h2>
          <p>
            Close this tab and you have no control. Emotions still run you. The
            scoreboard looks like lost friends, family, employees, coworkers,
            jobs.
          </p>
          <p style={{ margin: 0 }}>
            $47 exists while the bar counts. Miss it and the price climbs with
            the proof — $57, $67, $77, $87, $97. When the finished course ships,
            its standard price is $4,997. This page’s early price never comes
            back.
          </p>
        </div>

        <h2 id="buy">Last</h2>
        <p>
          Workbook and app. One system. $10,000 in person. $97 here. $47 today.
          The book tells you what to do. It will not execute it.
        </p>
        <div className="lf-cta">
          <p className="lf-timer-final">
            <Countdown id="timerFinal" />
          </p>
          <BuyButton
            productId="stack"
            label={
              <>
                Take the Full System — <StackPrice />
              </>
            }
          />
          <BuyButton
            id="buy-book"
            productId="book"
            variant="ghost"
            label="Just the book — $9.99"
          />
          <p className="lf-tiny">Invocation Inc. Press. Mark. Speak. Do.</p>
        </div>
        <p className="lf-ps">
          P.S. If you are still here, you are not confused. You are negotiating
          with a feeling that has never once paid rent. Hit the red button.
        </p>
        <div className="lf-cta">
          <BuyButton
            productId="stack"
            label={
              <>
                Get the Full System — <StackPrice />
              </>
            }
          />
        </div>
        <p className="lf-ps">
          P.P.S. When the testimonials exist we raise the number in public. You
          do not get a sympathy coupon for hesitating on a Saturday.
        </p>
        <div className="lf-cta">
          <BuyButton
            productId="stack"
            label={
              <>
                Get the Full System — <StackPrice />
              </>
            }
          />
        </div>
        <Footer />
      </main>
      <StickyBar />
    </>
  );
}
