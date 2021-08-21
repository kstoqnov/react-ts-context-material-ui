import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {

  const checkTodo: string = todo.status ? `line-through` : "";

  return (
    <Card 
      sx={{
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
        padding: "0.5rem 1rem",
        "& .line-through": {
          textDecoration: "line-through",
          color: "#777 !important",
        },
        "&::not(:last-child)": {
          borderBottom: "1px solid #333333",
        },
        "& h1": {
          fontSize: "3rem",
          color: "#0970b4",
          textTransform: "capitalize",
        },
        "& .Card--button": {
          padding: "0.4rem 1rem",
          cursor: "pointer",
          background: "#00aa69",
          border: "1px solid #00aa69",
          color: "#fff",
          marginRight: "1rem",
        },
        "& .hide-button": {
          display: "none",
        }
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h1"
          className={checkTodo}
        >
          {todo.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={checkTodo}
        >
          {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => updateTodo(todo.id)}
          className={todo.status ? `hide-button` : "Card--button"}
        >
          Complete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Todo;
