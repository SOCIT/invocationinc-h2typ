import Link from "next/link";
import { BuyButton } from "./BuyButton";
import { bookProduct, LAUNCH_CODE } from "@/lib/products";

const CHAPTERS: Array<[string, string]> = [
  ["Chapter 0 — Brief", "The contract. Fix yourself first, communicate so it lands, use incentives without becoming a manipulator. Includes the violence and codependence gates — read these before anything else."],
  ["Chapter 1 — Become Someone Worth Building With", "The minimum viable you: ten practices to run before you try to change anyone else. Clean up the narrator or you will keep hiring critics."],
  ["Chapter 2 — Communication", "Communication is what the listener does. Love languages, plain talk without vinegar, diagnosing the real fight — blood-sugar, sleep, fear, or respect — and the repair move for each failure mode. Treat them how they want to be treated."],
  ["Chapter 3 — Questions", "A staged question bank for exposing deal-breakers — by stage: after 3 dates, official, “I love you,” after sex, met the family. Values, money, kids, exes, conflict style. The mouth gives a theory. The week gives the spec."],
  ["Chapter 4 — Preventing Trauma Bonds", "Hot-cold-fear-reward is a slot machine, not love. ACE screening. If the relationship only works when someone is scared or sorry, it is not a language problem. It is this."],
  ["Chapter 5 — Neurobiology", "The wiring diagram: adrenaline, dopamine, oxytocin, endorphins, serotonin, GABA, glutamate — what each lever does, and four moves that use the chemistry on purpose. A feeling is not a verdict. It is often a chemical you just invited."],
  ["Chapter 6 — Understanding Incentive", "Relationship Math: negatives hit at −2 or more, positives at +1 or less. What follows the action, and who the person has become when they walk in. You set the mode of the house."],
  ["Chapter 7 — Changing the Present", "Train the positive behavior, not the negative one. Positive redirection, the running list, ~21 pairings over 1–2 months to install a habit. Creating the present vs changing it."],
  ["Chapter 8 — Changing the Past", "Memory is rebuilt, not replayed. Revisit old fights and old stories in a positive state and change the emotion attached to them — or stop arguing and making yourself a worse partner in the past."],
  ["Chapter 9 — Changing the Future", "Frontload good nights before they happen. Preview the night in a way they can actually hear, name the night, set the good end first. Most of the future is the past plus the present."],
  ["Chapter 10 — The Tool Set", "The daily practices: the Pause, the debrief, Daily GPS bookends, entrainment, frontloading, the “are we fighting?” interrupt, swapping “but” for “and.” The toolkit."],
  ["Chapter 11 — The #1 Way", "Maintain a positive attitude toward the relationship as a decision, not a mood. Never let a cheap negative sit. Thought. Word. Act. Habit. Character. Destiny of the relationship."],
];

const FAQS: Array<[string, string]> = [
  [
    "Isn't this manipulative?",
    "The tools in this book are incentive mechanics every human already uses subconsciously — this book makes them conscious and then constrains them: no violence, no fear-bonds, no staged crises, no aiming them at someone who doesn't want you. Same tools can be used to manipulate. The question is not whether you influence each other. It is whether you do it on purpose, with care, or by accident, with damage. If that is the plan, you are the problem this book is warning the other person about.",
  ],
  [
    "What if my partner won't change?",
    "You don't start with them. The sequence is: become a person first, then pick, then run the system. Change your own behavior first and watch what moves. And the book is explicit that leaving is a valid outcome — if the other person is dangerous or the deal-breakers don't clear, exit is on the table.",
  ],
  [
    "We've tried communicating.",
    "Communication is what the listener does. You don't get credit for sentences that existed in your head. Most couples didn't fail at effort — they failed at format: care sent in the wrong love language, information sent in a way they could not hear. Chapter 2 rebuilds it from the listener's side.",
  ],
  [
    "This sounds like tricks. NLP mind games.",
    "These are the same mechanics used in parenting, management, and sales. The difference between a trick and a tool is the direction of aim — are you building a better relationship or manufacturing control? The book bans the dirty uses by name: staged crises, compliments as smoke bombs, disappearing to manufacture hunger, makeup without repair.",
  ],
  [
    "This is just operant conditioning repackaged.",
    "The book uses a century of behavioral science plus Helen Fisher's fMRI work on love and heartbreak — aimed at a relationship, not a lab. The mechanics are old. Pointing them at a better relationship, on purpose, is the part most people never do.",
  ],
  [
    "Why the dog-training title?",
    "The title is deliberate provocation. The method inside is deliberate care.",
  ],
  [
    "Is it too late for us? The past is poisoned.",
    "No. The facts and the lessons stay. What changes is the emotion attached to remembering the event. Memory is rebuilt, not replayed — that's the neuroscience (Chapter 8), and there's a sequence for it. Arguing about the past writes you as a worse partner in it.",
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
    "That's the design. The entire sequence starts with your behavior, your communication, your incentives. You don't need their buy-in to change the mode of the house.",
  ],
  [
    "We're already in counseling. Is this a replacement?",
    "No. This isn't therapy — it's a daily operating system for the hours between sessions. If you need therapy, get therapy. This book assumes you're safe enough to stay and whole enough to change yourself first.",
  ],
  [
    "What exactly do I get?",
    "The complete book as a PDF and an EPUB, available to download the second your payment clears.",
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
        <a
          href="https://invocationinc.com/"
          aria-label="Invocation Inc"
          className="lf-imprint-mark"
        >
          <img
            src="/img/invocation-logo.png"
            alt="Invocation Inc"
            width={130}
            height={30}
            className="lf-imprint-logo"
          />
        </a>
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

        <h1>Run your relationship like a system.</h1>

        <p className="lf-lead">
          Most relationship books tell you to share your feelings and hope. This one
          treats the relationship like a system you can run.
        </p>

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
            whose plan is to stay identical while the other person becomes convenient,
            quieter, easier to manage should close this page.
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
          relationships — they get a different book (<a href="https://h2lp.invocationinc.com/"><em>How to Like People</em></a>). If you
          apply partner-training tools to an employee or a child, you are not clever.
          You are the problem.
        </p>

        <p>
          Nobody remembers the actual event. They remember the emotion attached to the
          event. When you remember a fight, your body replays the feeling — the anger,
          the fear, the shame — as if it is happening now. That feeling is the part
          that poisons the next conversation. The facts and the lessons are not erased;
          you keep those. The goal is to change the emotion attached to remembering the
          event, so it stops hijacking the present. That is what Chapter 8, &quot;Changing
          the Past,&quot; is about.
        </p>

        <p>
          Yes, the title is deliberate. No, it is not about controlling anyone.{" "}
          <strong>You train the positive behavior</strong> — yours first, then theirs —
          with communication that actually lands, incentives aimed at a
          better relationship instead of a better leash, and daily habits that stop
          you from falling out of love.
        </p>

        <p>
          If you will change your own behavior first, you get a working sequence:
          get-out rules, self-repair, communication that lands, questions that expose
          deal-breakers, and daily habits that stop you from falling out of love.
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
            and pay $4.97. PDF + EPUB instant download.
          </p>
        </div>

        <h2>Falling out of love: what this book fixes</h2>

        <p>
          No part of you means the sentences you are still saying. You can tell: they
          come out of your mouth slightly before you decide to say them, and you watch
          yourself saying them like you are standing three feet behind yourself. Those
          are recordings, and the people playing them recorded them decades ago. Most
          people hear a recording and answer it as if it were said today — about today —
          and that is how a Tuesday argument about dishes becomes a fight about everything
          that ever happened.
        </p>

        <p>Most fights are just two people who heard the same sentence in two different languages.</p>

        <p>
          Mismatch is most of the stupid fights in a house. <em>“You never help”</em>{" "}
          often means <em>“you never touch me.”</em> A complaint is “the dishes are still
          in the sink.” Criticism is a verdict on their character. Hints are not
          communication — they are a test the other person did not agree to take.
          Most of those fights were never agreed to in the first place. An agreement
          needs a destination and a clock — what, and when. If you can&apos;t tell whether
          you landed, you didn&apos;t agree. You expected. Two pilots, one plane, no agreed
          destination: you crash the plane.
        </p>

        <p>
          The top four reasons relationships fail. 1. Mismatch. 2. The quiet killer: two
          versions of the same event. If it was not said, it could not be understood — and
          if the listener did not hear and understand it, it did not land. Most people are
          still running old conversations. 3. The scared, sorry, and insecure stuff that turns
          a Tuesday into a landmine. 4. The slow fade nobody addresses until someone is
          already gone. An unspoken expectation is not an agreement.
        </p>

        <p>
          If you are scared, sorry, or insecure, none of this lands — and you would not
          be the first. Codependency turns love into surveillance. A savage inner narrator
          turns every silence into evidence. You can begin to fall out of love before the
          first fight, and one person quietly checking out is enough to end it. That is why
          the book starts where the relationship actually lives: with you, and the sentences
          you are still saying that you never meant.
        </p>

        <h2>The mechanism: Relationship Math</h2>

        <p>
          And this isn&apos;t vibes — it&apos;s hard science. Neuroscientist Helen Fisher
          spent years putting people in love — and people heartbroken — into fMRI scanners,
          mapping what the brain actually does during both. This book takes her findings
          seriously. Underneath that: a Russian with dogs and a century of behavioral
          science, and neurochemistry you can run on purpose instead of by accident.
        </p>

        <p>
          Here is the core mechanic, and it is not fair:{" "}
          <strong>negatives hit at −2 or more. Positives land at +1 or less.</strong>{" "}
          One contemptuous sentence erases a week of kindness. Once you know the math,
          you stop <strong>spending</strong> your words like they are all worth the same.
        </p>

        <p>
          People run from the negative with twice the vigor they run toward the
          positive. <strong>Run from the sabertooth, walk toward the berries.</strong>{" "}
          The brain is built to remember the saber-tooth — anger and disappointment
          stick because they read as threat. So you don&apos;t change the present with
          fear. You train the positive behavior and reward it until it stops feeling like a technique and starts feeling like you.
        </p>

        <p>
          <strong>Communication is what the listener does.</strong> You get credit for
          what arrived — not for the sentence that existed in your head. You will
          communicate so it lands: saying it in a way the other person can actually
          hear — plainly, at the right time, without the vinegar. You will learn to tell
          which kind of fight you are actually in. Is this a blood-sugar war, a sleep war,
          a fear war, or a respect war? Most fights are misdiagnosed, so the fix misses.
          You will get the four failure modes — and the repair move for each one — and a
          way to say the thing plainly that does not start a war.
        </p>

        <p>
          Then the house itself starts working. The tone, the rhythm, the way an evening
          goes — all of it can be set on purpose instead of inherited from whoever had the
          worst day. The mode of the house becomes something you choose: calm, warm, direct.
          Aimed at the two of you, not at winning the fight.
        </p>

        <p>The sequence, in order:</p>
        <ol>
          <li><strong>Fix yourself first.</strong> The recordings, the fear, the old sentences — dealt with before you touch anything else.</li>
          <li><strong>Communicate so it lands.</strong> Plainly, at the right time, in a way they can hear it.</li>
          <li><strong>Expose deal-breakers early.</strong> Find out in month one what would end it in year five — gently, honestly, before anyone is trapped. If you never had an agreement, you never had an agreement.</li>
          <li><strong>Run incentives on purpose.</strong> Reward the good deliberately, with real affection and care — redirect what is not working without punishment or coldness.</li>
          <li><strong>Build daily habits that stop you from falling out of love.</strong> Small repetitions until the good is automatic — warm, direct, calm.</li>
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
          mechanics every human already runs subconsciously. This book makes them
          conscious — and then constrains them:
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
          better relationship and it is a tool. Aim at control and you are the <strong>problem</strong> this
          book is warning the other person about.
        </p>

        <p>
          And a tell worth learning: “you always” and “you never” are usually pointing at a deeper, unresolved complaint — one that has been waiting a long time to be said plainly.
        </p>

        <h2>The author</h2>

        <div className="lf-author">
          <img
            src="/img/author-jonah.jpg"
            alt="Jonah Dorman"
            width={180}
            height={180}
            className="lf-author-photo"
          />
          <div className="lf-author-bio">
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
              studied hypnosis, NLP, sales, and performance. He&apos;s been doing all of it for decades,
              and he still does: private coaching, and a company that makes weapons components for
              the U.S. Navy.
            </p>

            <p>
              The book is what those jobs have in common: humans respond to incentives,
              stories, and repetition — whether you admit it or not. Years of knowledge,
              hundreds of books and published papers, years of coaching people on
              relationships — boiled down into methods regular people can actually use. No NLP. No
              regressive hypnosis. No EMDR. None of the professional and dark arts of
              psychology required.
            </p>
          </div>
        </div>

        <h2 id="offer">Get the book</h2>

        <p>
          <strong>How to Train Your Partner</strong> — the complete book, direct from
          the author. Years of knowledge boiled down into methods regular people can actually
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
            PDF and EPUB available to download the second your payment clears.
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
            P.S. — Thought. Word. Act. Habit. Character. Destiny of the relationship. Every
            relationship you have ever watched fall out of love did it one unexamined day at a time.
            This book is the other direction, on purpose.
          </p>
        </div>
      </main>

      <footer className="lf-footer">
        <p>© {new Date().getFullYear()} Invocation Inc. Not therapy. Not medical advice.</p>
        <p className="lf-imprint-line">
          <img
            src="/img/invocation-logo.png"
            alt="Invocation Inc"
            width={84}
            height={20}
            className="lf-imprint-logo-sm"
          />
          <span>
            An <a href="https://invocationinc.com/">Invocation Inc</a> publication
          </span>
        </p>
        <p>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </p>
      </footer>
    </>
  );
}
