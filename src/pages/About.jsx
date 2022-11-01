import { useEffect } from "react";
import OrdersCard from "../components/OrdersCard";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about container">
      <h1 className="caption">Информация о нас</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam,
        architecto nobis ullam perferendis rem ipsam praesentium laudantium
        dolores quidem esse repudiandae! Inventore officiis provident natus
        consectetur eos nostrum, animi, quis suscipit maxime non corporis
        ducimus asperiores iure! Quos, officia modi, ratione at optio facilis
        dicta doloremque eum odio molestias in, dignissimos exercitationem iure
        animi perferendis? Ut veritatis aut fugit nemo, laboriosam accusamus
        itaque voluptatem ratione sequi rem, aliquam est soluta dolore delectus
        saepe incidunt. Ipsum et nihil repellat cumque soluta explicabo id
        aspernatur quam laboriosam rem enim corrupti error fugit sint earum
        amet, sapiente temporibus ullam veniam nisi tempore.
      </p>
      <OrdersCard />
    </div>
  );
}

export default About;
