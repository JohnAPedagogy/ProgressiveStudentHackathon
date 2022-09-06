#include "square.h"

Square::Square()
{
    size.first = Tetris::SQS;
    size.second = Tetris::SQS;
}

Square::Square(int x, int y)
{
    Square();
    loc.first = x;
    loc.second = y;
}
<<<<<<< HEAD
void Square::setLoc(QPair<int,int>loc)
{
    setPos(mapToParent(loc.first*size.first, loc.second*size.second));
    emit Tetris::Game.boardChanged(loc,1);
}
=======


>>>>>>> 33fe5af0f750ad0c777a09fe580243b9157c95ab
QRectF Square::boundingRect() const
{
    return QRect(0,0,size.first,size.second);
}

void Square::paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget)
{
    QRectF rect = boundingRect();

    // basic collision detection

    if(scene()->collidingItems(this).isEmpty())
    {
        // no collision
        QPen pen(back, 5);
<<<<<<< HEAD
        painter->setPen(back);
=======
        painter->setPen(pen);
>>>>>>> 33fe5af0f750ad0c777a09fe580243b9157c95ab
    }
    else
    {
        // collision !!!
        QPen pen(back, 5);
        painter->setPen(pen);

    }
    QBrush brush(fore);
<<<<<<< HEAD
    painter->fillRect(rect, brush);
    //painter->drawRect(rect);
=======
    painter->setBackground(brush);
    painter->drawRect(rect);
>>>>>>> 33fe5af0f750ad0c777a09fe580243b9157c95ab
}

void Square::advance(int phase)
{
    if(!phase) return;

    //QPointF location = this->pos();//TODO: Remove unused variable

    setPos(mapToParent(0, -speed));
}


