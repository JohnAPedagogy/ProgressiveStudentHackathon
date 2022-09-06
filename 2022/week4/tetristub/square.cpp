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
void Square::setLoc(QPair<int,int>loc)
{
    setPos(mapToParent(loc.first*size.first, loc.second*size.second));
    emit Tetris::Game.boardChanged(loc,1);
}
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
        painter->setPen(back);
    }
    else
    {
        // collision !!!
        QPen pen(back, 5);
        painter->setPen(pen);

    }
    QBrush brush(fore);
    painter->fillRect(rect, brush);
    //painter->drawRect(rect);
}

void Square::advance(int phase)
{
    if(!phase) return;

    //QPointF location = this->pos();//TODO: Remove unused variable

    setPos(mapToParent(0, -speed));
}


