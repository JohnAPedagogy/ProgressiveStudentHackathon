import java.awt.*;

public class Block  {
    public IntPair location;
    public IntPair sqrSz;
    //public int SquareSize;
    Color ForeColor;
    Color BackColor;
    public Square square1;
    public Square square2;
    public Square square3;
    public Square square4;

/*
    private boolean down()
    {
        if(GameField.IsEmpty(square1, Nav.SOUTH) &&
                GameField.IsEmpty(square2, Nav.SOUTH) &&
                GameField.IsEmpty(square3, Nav.SOUTH) &&
                GameField.IsEmpty(square4, Nav.SOUTH) ){
            hide();
            square1.location.y += sqrSz;
            square2.location.y += sqrSz;
            square3.location.y += sqrSz;
            square4.location.y += sqrSz;
            show();
            return true;
        }else{ // add to array
            GameField.stopSquare(square1);
            GameField.stopSquare(square2);
            GameField.stopSquare(square3);
            GameField.stopSquare(square4);
            return false;
        }
    }
    private boolean left()
    {
        if(GameField.IsEmpty(square1,Nav.WEST) &&
                GameField.IsEmpty(square2,Nav.WEST) &&
                GameField.IsEmpty(square3,Nav.WEST) &&
                GameField.IsEmpty(square4,Nav.WEST) ){
            hide();
            square1.location.x -= sqrSz;
            square2.location.x -= sqrSz;
            square3.location.x -= sqrSz;
            square4.location.x -= sqrSz;
            show();
            return true;
        }else{ // add to array
            return false;
        }
    }*/
   /* public void Rotate(){
        IntPair old1 = square1.location;
        IntPair old2 = square2.location;
        IntPair old3 = square3.location;
        IntPair old4 = square4.location;
        hide();
        switch(blockType)
        {
            case BlockTypes.O
                    rotateO();
            case BlockType.I
                    rotateI();

        }
        if(!(GameField.IsEmpty(square1,Nav.NORTH)
                &&
                GameField.IsEmpty(square2,Nav.NORTH) &&
                GameField.IsEmpty(square3,Nav.NORTH) &&
                GameField.IsEmpty(square4,Nav.NORTH)) ){
            square1.location = old1;
            square2.location = old2;
            square3.location = old3;
            square4.location = old4;
        }
        show();
    }*/
  /*  public void rotateS() //along with I and Z have 2
   // rotations North and East
    {
        switch(rotation)
        {
            case Nav.NORTH:
                rotation=Nav.EAST;
                square1.location = new
                        IntPair(square2.location.y-sqrSz, square2.location.y);
                square3.location=new
                        IntPair(square2.location.x+sqrSz, square.location.y);
                square4.location=new
                        IntPair(square2.location.x+2*sqrSz,
                        square.location.y);
                break;
            case Nav.EAST:
                    square1.location = new
                    IntPair(square2.location.y, square2.location.y-sqrSz);
                square3.location=new
                        IntPair(square2.location.x, square.location.y+sqrSz);
                square4.location=new
                        IntPair(square2.location.x,
                        square.location.y+2*sqrSz);
                break;
        }
    }*/
    public void top()
    {
//        return Math.min(square1.location.y, Math.min(square2.location.y,Math.min(square3.loc
//                ation.y,square4.location.y)));
    }
    public void Hide(){

    }
    public void Show(){

    }
}
