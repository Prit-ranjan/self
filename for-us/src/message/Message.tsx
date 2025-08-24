import "./Message.css"; // Import the CSS file for styling

function Message() {
  const defaultText = `Hi Golu,

I Love You ❤️.

I have already said how much I Love You and what are you to me. I am short of words now. Wrote hundreds of emails,
millions of words already used. You alreay know how weak my vocabulary was, although I exceeded my capacity here also
as I exceeded my potential in every aspect for you.

I tried many ways to get with you. I failed every time. You won't get how much pain it gives. But i am trying my 100%,
giving all my efforts. This is very painful for me, but I know if I succeed, i will be with you, my life, my peace, my
everything. I will be on top of the world. But what if i fail? Ummm, not thinking about that, I have to get over this challenging time.
I hope I will be able to convince you. My life is nothing without you.

Please please please be with me, stand with me, I can't imagine my life without you..... Bht yaad aati tumhare. Please contact me.
I really really wanna marry you and you only.
Will you marry me? Please...
I Loved You, I Love You, I will be Loving You.

"I met you when I was not looking for you. I lost you, when I Loved you the most"

Only Yours,
Bail

`;
  return (
    <div className="message-container">
      <div className="text-frame">
        <textarea
          className="text-box"
          placeholder="Write your message here..."
          defaultValue={defaultText}
          readOnly={true}
        ></textarea>
      </div>
    </div>
  );
}

export default Message;
