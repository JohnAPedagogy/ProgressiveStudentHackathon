import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class Square {
    public Point location;
    public IntPair size = new IntPair();
    Color foreColor = Color.green;
    Color backColor;


    Tetris board;

    public Square(Tetris b) {
        board = b;
    }

    public void show(Graphics g) {
        //System.out.println("drawing square.."+Tetris.sqSz);
        g.setColor(foreColor);
        int top = board.top();
        int ca = board.centerAxis();
        g.fillRect(ca, top, size.x, size.y);
    }

    public void locFromLogical(int x, int y) {
       IntPair loc = new IntPair();
        loc.x = x * size.x; //x* size.x
        loc.y = y * size.y; //y*size.y

    }
}
   /* private boolean down()
    {
        if(Tetris.IsEmpty(this, Nav.SOUTH)) {
        hide();
        location.y += sqrSz;
        show();
        return true;
    }
     else { // add to array
        Tetris.stopSquare(this);
        return false;
    }
    }
    private boolean left()
    {
        if(Tetris.IsEmpty(this,Nav.
                WEST) ){
            hide();
            location.x -= sqrSz;
            show();
            return true;
        }else{ // add to array
            return false;
        }
    }*/


