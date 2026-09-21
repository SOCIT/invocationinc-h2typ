import Link from "next/link";
import { BuyButton } from "./BuyButton";
import { bookProduct, LAUNCH_CODE } from "@/lib/products";

const CHAPTERS: Array<[string, string]> = [
  ["Chapter 0 — Brief", "The contract. Fix yourself first, communicate so it lands, use incentives without becoming a manipulator. Includes the violence and codependence gates — read these before anything else."],
  ["Chapter 1 — Become Someone Worth Building With", "The minimum viable you: ten practices to run before you operate on anyone else. Clean up the narrator or you will keep hiring critics."],
  ["Chapter 2 — Communication", "Communication is what the listener does. Love languages, representational systems, Satir's leveler, Gottman's Four Horsemen, Maslow as a fight diagnostic, Robbins' six needs. Treat them how they want to be treated."],
  ["Chapter 3 — Questions", "A staged question bank for exposing deal-breakers — by stage: after 3 dates, official, “I love you,” after sex, met the family. Values, money, kids, exes, conflict style. The mouth gives a theory. The week gives the spec."],
  ["Chapter 4 — Preventing Trauma Bonds", "Hot-cold-fear-reward is a slot machine, not love. ACE screening. If the relationship only works when someone is scared or sorry, it is not a language problem. It is this."],
  ["Chapter 5 — Neurobiology", "The wiring diagram: adrenaline, dopamine, oxytocin, endorphins, serotonin, GABA, glutamate — what each lever does, and four moves that use the chemistry on purpose. A feeling is not a verdict. It is often a chemical you just invited."],
  ["Chapter 6 — Understanding Incentive", "Relationship Math: negatives hit at −2 or more, positives at +1 or less. Operant vs classical conditioning — what follows the action, and who the person has become when they walk in. You are the bell."],
  ["Chapter 7 — Changing the Present", "Train the positive behavior, not the negative one. Positive redirection, the running list, ~21 pairings over 1–2 months to install a habit. Creating the present vs changing it."],
  ["Chapter 8 — Changing the Past", "Memory is rebuilt, not replayed. Recode old fights and old stories in a positive state with a better narrative — or stop arguing and making yourself a worse partner in the past."],
  ["Chapter 9 — Changing the Future", "Frontload good nights before they happen. Preview in their representational system, name the night, set the good end first. Most of the future is the past plus the present."],
  ["Chapter 10 — The Tool Set", "The daily practices: the Pause, the recode debrief, Daily GPS bookends, entrainment, frontloading, the “are we fighting?” interrupt, swapping “but” for “and.” The operator's kit."],
  ["Chapter 11 — The #1 Way", "Maintain a positive attitude toward the relationship as a decision, not a mood. Never let a cheap negative sit. Thought. Word. Act. Habit. Character. Destiny of the pair."],
];

const FAQS: Array<[string, string]> = [
  [
    "Isn't this manipulative?",
    "The tools in this book are incentive mechanics every human already uses unconsciously — this book makes them conscious and then constrains them: no violence, no fear-bonds, no staged crises, no aiming them at someone who doesn't want you. Same tools can be used to manipulate. If that is the plan, you are the problem this book is warning the other person about.",
  ],
  [
    "What if my partner won't change?",
    "You don't start with them. The sequence is: become a person first, then pick, then run the system. Change your own behavior first and watch what moves. And the book is explicit that leaving is a valid outcome — if the other person is dangerous or the deal-breakers don't clear, exit is on the table.",
  ],
  [
    "We've tried communicating.",
    "Communication is what the listener does. You don't get credit for sentences that existed in your head. Most couples didn't fail at effort — they failed at format: care sent in the wrong love language, information sent in the wrong representational system. Chapter 2 rebuilds it from the listener's side.",
  ],
  [
    "This sounds like tricks. NLP mind games.",
    "These are the same mechanics used in parenting, management, and sales. The difference between a trick and a tool is the direction of aim — are you building a better pair or manufacturing control? The book bans the dirty uses by name: staged crises, compliments as smoke bombs, disappearing to manufacture hunger, makeup without repair.",
  ],
  [
    "Is it too late for us? The past is poisoned.",
    "Memory is rebuilt, not replayed — that's not a metaphor, it's the neuroscience (Chapter 8). Old nights can be recoded in a positive state with a better narrative. And arguing about the past writes you as a worse partner in it. There's a sequence for this.",
  ],
  [
    "I don't want a system. I want love.",
    "Humans respond to incentives, stories, and repetition — whether you admit it or not. You're already running a system; this one is just on purpose. The garden is why you wanted to live there. The system is how you keep it alive.",
  ],
  [
    "What if the problem is abuse?",
    "Then this book is not the move. Physical violence is not a communication problem and you don't fix it from inside the blast radius — get out, get safe. In the US: thehotline.org or 1-800-799-7233. This page will not sell you a book for that.",
  ],
  [
    "I'm single. Is this for me?",
    "Yes — deliberately. The sequence starts before you pick anyone: become someone worth building with, then choose with the deal-breaker questions, then run the system. Single, on date one, or in year fifty — the sequence is the same.",
  ],
  [
    "Does it work if only I read it?",
    "That's the design. The entire sequence starts with your behavior, your communication, your incentives. You don't need their buy-in to become the bell.",
  ],
  [
    "We're already in counseling. Is this a replacement?",
    "No. This isn't therapy — it's a daily operating system for the hours between sessions. If you need therapy, get therapy. This book assumes you're safe enough to stay and whole enough to change yourself first.",
  ],
  [
    "What exactly do I get?",
    "The complete book as a PDF, available to download the second your payment clears. The EPUB edition is in final formatting — every buyer gets it emailed free the moment it's done.",
  ],
  [
    "Will this be on Amazon?",
    "Kindle and paperback editions are coming to Amazon at their own prices. Buying here direct gets you the launch price — and the first 100 readers pay $4.97 with the code at the top of this page.",
  ],
];

export function H2TYPPage() {
  return (
    <>
      <div className="lf-bar">
        HOW TO TRAIN YOUR PARTNER — <span className="lf-now">$9.97 · FIRST 100 READERS PAY $4.97</span>
      </div>

      <header className="lf-site-header">
        <div>Invocation Inc · Human Performance Engineers</div>
        <Link href="#offer">Get the Ebook — {bookProduct.priceDisplay}</Link>
      </header>

      <main id="main" className="lf-wrap">
        <p className="lf-stamp">
          A field manual for intimate relationships. Not Hallmark. Not pickup-artist.
        </p>

        <p className="lf-tiny" style={{ textAlign: "center", marginBottom: 4 }}>
          HOW TO TRAIN YOUR PARTNER
        </p>
        <p className="lf-tiny" style={{ textAlign: "center", marginTop: 0 }}>
          A guide to better relationships.
        </p>

        <h1>Run your relationship like an operator.</h1>

        <p className="lf-lead">
          Most relationship books tell you to share your feelings and hope. This one
          treats the relationship like a system you can run.
        </p>

        <p>
          <strong>You can&apos;t change the past. But you can change the memory of
          it — which is the same thing.</strong>{" "}
          Memory isn&apos;t a recording; it&apos;s a rebuild. Every time your partner
          recalls a fight, they reconstruct it, and whatever story followed the
          event gets mixed into what they think they saw. That&apos;s the
          misinformation effect — Elizabeth Loftus&apos;s lab work, not folk wisdom.
          Chapter 7 is called <em>Time Travel</em>: recode the past so a new
          reward can beat an old wound, and frontload a night that hasn&apos;t
          happened yet so the brain gets a finished good memory and the evening
          just has to catch up.
        </p>

        <p>
          Yes, the title is deliberate. No, it is not about controlling anyone.{" "}
          <strong>You train the positive behavior</strong> — yours first, then the
          pair's — with communication that actually lands, incentives aimed at a
          better relationship instead of a better leash, and daily habits that stop
          the slow rot.
        </p>

        <p>
          If you will change your own behavior first, you get a working sequence:
          get-out rules, self-repair, communication that lands, questions that expose
          deal-breakers, and daily operating habits that stop the slow rot.
        </p>

        <p>
          If you want a script to control someone who does not want you, this is the
          wrong book.
        </p>

        <div className="lf-cta" id="buy-hero">
          <BuyButton
            productId="book"
            label={<>Get the Ebook — {bookProduct.priceDisplay}</>}
          />
          <p className="lf-tiny">
            First 100 readers: enter code <strong>{LAUNCH_CODE}</strong> at checkout
            and pay $4.97. PDF instant download · EPUB emailed free when formatting
            is done.
          </p>
        </div>

        <h2>The gate: read this before anything else</h2>

        <p>This book is for adults in an intimate relationship who will change their own behavior first. Dating, living together, married, or trying to get back to any of those without lighting the house on fire. Single, on date one, or in year fifty — the sequence is the same: become a person first, then pick, then run the system.</p>

        <div className="lf-warn">
          <h2>Do NOT buy this book if:</h2>
          <p>
            <strong>You are being physically hurt.</strong> If your partner is hitting
            you, this book is not the move. Get out. (US: thehotline.org · 1-800-799-7233)
          </p>
          <p>
            <strong>Your plan is “make them change while I stay the same.”</strong> Anyone
            whose plan is to stay identical while the other person becomes convenient
            should close this page.
          </p>
          <p>
            <strong>You are hunting a hypnosis script to own a human.</strong> Same tools
            can be used to manipulate. If that is the plan, you are the problem this
            book is warning the other person about.
          </p>
          <p>
            <strong>You need someone else to give you a personality</strong> — or you need
            “save me / complete me” repair first. A person who cannot be well alone will
            use the other person as a life-support machine. That is not love. That is a
            hostage situation with extra holidays.
          </p>
        </div>

        <p>
          Also not for your boss, your coworker, your kid, or your vendor. Those are
          relationships — they get a different book (<em>How to Like People</em>). If you
          apply partner-training tools to an employee or a child, you are not clever.
          You are the problem.
        </p>

        <h2>The rot: what this book fixes</h2>

        <p>
          Every relationship accumulates a file of old sentences. They come back
          in fights, word for word: <em>“You are just like your mother.” “I should have
          left.” “You’re lucky I stay.”</em> The words you choose plant the seed of
          either success or failure in the mind of another — permanently.
        </p>

        <p>Most fights are just two different versions of the same story — different views, different perspectives.</p>

        <p>
          Mismatch is most of the stupid fights in a house. <em>“You never help”</em>{" "}
          often means <em>“you never touch me.”</em> A complaint is “the dishes are still
          in the sink.” Criticism is a verdict on their character. Hints are not
          communication — they are a test the other person did not agree to take.
        </p>

        <p>
          The top three reasons relationships fail: <strong>#1 Communication</strong>{" "}
          (including contempt), <strong>#2 Attention</strong> — presence, affection, sex —{" "}
          <strong>#3 Money.</strong> And the quiet killer underneath: <em>“If you cannot
          say the thing, you do not get to be angry they missed it.”</em>
        </p>

        <p>
          If the relationship only works when someone is scared or sorry, it is not a
          language problem. And people with no life cling; people with a savage inner
          narrator date whoever confirms it. The rot starts before the first fight.
        </p>

        <h2>The mechanism: Relationship Math</h2>

        <p>
          And this isn&apos;t vibes — it&apos;s hard science. Helen Fisher sticking
          couples into fMRI scanners and dissecting the anatomy of love. Conditioning
          mechanics. Neurochemistry you can run on purpose instead of by accident.
        </p>

        <p>
          Here is the core mechanic, and it is not fair:{" "}
          <strong>negatives hit at −2 or more. Positives land at +1 or less.</strong>{" "}
          One contemptuous sentence erases a week of kindness. Once you know the math,
          you stop spending your words like they are all worth the same.
        </p>

        <p>
          People run from the negative with twice the vigor they run toward the
          positive. <strong>Run from the sabertooth, walk toward the berries.</strong>{" "}
          The brain is built to remember the saber-tooth — anger and disappointment
          stick because they read as threat. So you don&apos;t change the present with
          fear. You train the positive behavior and reward it until it&apos;s ordinary.
        </p>

        <p>
          <strong>Communication is what the listener does.</strong> You get credit for
          what arrived — not for the sentence that existed in your head. Send care in
          their love language. Send information in their representational system. Be the
          leveler. Diagnose the fight by Maslow layer: is this a blood-sugar war or a
          respect war?
        </p>

        <p>
          And the part nobody says out loud: <strong>you are the bell</strong> — the
          trigger that sets your partner&apos;s mood the moment the car pulls in, before
          a word is spoken. <strong>You are the cause of way more than you know.</strong>{" "}
          Operant conditioning means what follows a behavior teaches the future. You are
          already training each other every day. This book makes it deliberate, and aimed
          at the pair instead of at winning.
        </p>

        <p>The operator sequence, in order:</p>
        <ol>
          <li><strong>Fix yourself first.</strong> Minimum viable you — ten practices — before you operate on anyone else.</li>
          <li><strong>Communicate so it lands.</strong> Their language, their system, no Four Horsemen.</li>
          <li><strong>Expose deal-breakers early.</strong> Staged questions — then watch the week, because behavior is the spec.</li>
          <li><strong>Run incentives on purpose.</strong> Reward the positive behavior. Redirection beats punishment. ~21 pairings installs a habit.</li>
          <li><strong>Daily habits that stop the rot.</strong> Morning/night bookends, the Pause, the recode debrief, frontloaded good nights.</li>
        </ol>

        <h2>What you’ll learn: the 12 chapters</h2>

        {CHAPTERS.map(([title, desc]) => (
          <div className="lf-week" key={title}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}

        <h2>Let’s address the title</h2>

        <p>
          <strong>“Isn’t this manipulative?”</strong> It is the right question, and the
          book answers it before you can finish asking. The tools are incentive
          mechanics every human already runs unconsciously. This book makes them
          conscious — and then puts them on a leash:
        </p>

        <ul>
          <li>No violence, ever. Pain is not a teaching tool here. It is the end of the project called “relationship.”</li>
          <li>No fear as the operating system. Fear gets fast results and a house that cannot rest — hiding, lying, and a flinch when the car pulls in.</li>
          <li>No manufactured crises. No hiding their things to play hero, no compliments as smoke bombs, no disappearing to manufacture hunger, no makeup without repair.</li>
          <li>Contempt is out, always. It is the #1 predictor of failure. The ban list: always, never, worthless, crazy, “you’re just like X,” threats to leave used as volume knobs.</li>
          <li>Honesty = matching. What you feel, what you say, and what your face does have to agree. No performing “I’m fine.”</li>
        </ul>

        <p>
          The difference between a trick and a tool is the direction of aim. Aim at a
          better pair and it is a tool. Aim at control and you are the problem this
          book is warning the other person about.
        </p>

        <h2>The author</h2>

        <p>
          <strong>Jonah Dorman</strong> is a U.S. Army combat veteran. He trained foster
          parents, social workers, and child-protection staff in trauma-informed care
          and positive communication — and served as VP or Chair/CoChair of 7+
          organizations bridging foster parents, the agencies that handle placements,
          and the government.
        </p>

        <p>
          He&apos;s been GM, VP, interim CEO — managing coders and IT workers (not always
          the best communicators) and running performance reviews for a living. He has
          studied hypnosis, NLP, sales, and performance.
        </p>

        <p>
          The book is what those jobs have in common: humans respond to incentives,
          stories, and repetition — whether you admit it or not. Years of knowledge,
          hundreds of books and published papers, years of coaching people on
          relationships — dumbed down into methods normal people can use. No NLP. No
          regressive hypnosis. No EMDR. None of the professional and dark arts of
          psychology required.
        </p>

        <h2 id="offer">Get the book</h2>

        <p>
          <strong>How to Train Your Partner</strong> — the complete book, direct from
          the author. Years of knowledge dumbed down into methods normal people can
          use. It&apos;s not even a hundred pages. What&apos;s that worth? The coaching
          behind it is expensive. The manual is <s>{bookProduct.listPriceDisplay}</s>{" "}
          <strong>{bookProduct.priceDisplay}</strong>.
        </p>

        <div className="lf-cta">
          <p className="lf-cta-kicker">
            First 100 readers pay $4.97 — enter code <strong>{LAUNCH_CODE}</strong> at checkout
          </p>
          <BuyButton
            productId="book"
            label={<>Get the Ebook — {bookProduct.priceDisplay}</>}
          />
          <p className="lf-tiny">
            PDF available to download the second your payment clears. The EPUB edition
            is in final formatting — every buyer gets it emailed free the moment it&apos;s done.
          </p>
          <p className="lf-tiny">
            Sold here direct from the author. Kindle and paperback editions are coming
            to Amazon at their own prices — buying here gets you the launch price.
          </p>
        </div>

        <h2>Questions</h2>

        <div className="lf-faq">
          {FAQS.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>

        <div className="lf-ps">
          <p>
            P.S. — Thought. Word. Act. Habit. Character. Destiny of the pair. Every
            relationship you have ever watched rot did it one unexamined day at a time.
            This book is the other direction, on purpose.
          </p>
        </div>
      </main>

      <footer className="lf-footer">
        <p>© {new Date().getFullYear()} Invocation Inc. Not therapy. Not medical advice.</p>
        <p>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </p>
      </footer>
    </>
  );
}
