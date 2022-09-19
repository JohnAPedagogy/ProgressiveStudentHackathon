#include "tetris.h"

Square::Square()
{
    size.first = Tetris::SQS;
    size.second = Tetris::SQS;
    fore = Tetris::Game.color;
    back = Tetris::Game.color;
}

Square::Square(QColor f, QColor b){
    size.first = Tetris::SQS;
    size.second = Tetris::SQS;
    fore = f;
    back = b;
}
Square::Square(int x, int y, QColor f, QColor b){
  Square(x,y);
  fore = f;
  back = b;
}
Square::Square(int x, int y)
{
    Square();
    locFromLogical(x,y);
}
void Square::locFromLogical(int x, int y)
{
    loc.first = x*size.first; //x* size.x
    loc.second = y*size.second; //y*size.y
    //setPos(mapToParent(loc.first,loc.second));
    //qDebug() << "locfrom logical " << size.first << "," << x;
}
QRectF Square::boundingRect()
{
    return QRect(loc.first,loc.second,size.first,size.second);
}

void Square::paint(QPainter *painter)
{
    QRectF rect = boundingRect();
    QPen pen(back, 5);
    painter->setPen(pen);
    QBrush brush(fore);
    painter->fillRect(rect, brush);
    painter->drawRect(rect);
}
bool Square::operator==(const Square& s){
    return s.loc== loc;
}
void Square::advance()
{
    //emit Tetris::Game.boardChanged(BoardEvent::South);
}

//bool Square::collision(){
// return !scene()->collidingItems(this).isEmpty();
//}

