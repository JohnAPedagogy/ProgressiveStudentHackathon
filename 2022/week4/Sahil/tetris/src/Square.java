import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class Square {
    public Point location=new Point();
    public IntPair size = new IntPair();
    Color foreColor = Color.green;
    Color backColor;

    Tetris board;

    public Square(Tetris b) {
        board = b;
        location.y = board.top();
        location.x = board.centerAxis();
    }

    public void show(Graphics g) {
        //System.out.println("drawing square at "+location.x+","+location.y);
        g.setColor(foreColor);
        g.fillRect(location.x,location.y, size.x, size.y);
    }

    public void locFromLogical(int x, int y) {
        IntPair loc = new IntPair();
        loc.x = location.x + x * size.x; //x* size.x
        loc.y = location.y + y * size.y; //y*size.y
        //System.out.println("before square at "+location.x+","+location.y);
        this.location.setLocation(loc.x, loc.y);
        //System.out.println("after square at "+location.x+","+location.y);
    }
    public void startPos(){
        location.y = board.top();
        location.x = board.centerAxis();
    }
    public boolean atTheBottom(){
        return location.y >= board.bottom();
    }
    public void moveDown(){
        if(!atTheBottom()) locFromLogical(0,1);
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


