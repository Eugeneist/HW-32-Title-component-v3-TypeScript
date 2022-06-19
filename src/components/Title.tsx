type TitleProps = {
    name: string;
    type?: "normal" | "bold";
};

const Title = ({ name, type = "normal" }: TitleProps) => {

  return (
    <>
      <h2 style = {{ fontWeight: type }}>
          Hello, {name}!
      </h2>
    </>
  );
}


export default Title;