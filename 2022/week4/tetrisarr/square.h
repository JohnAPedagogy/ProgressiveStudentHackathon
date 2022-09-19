#ifndef SQUARE_H
#define SQUARE_H
#include <QPair>
#include <QColor>
#include <QGraphicsItem>
#include "tetris.h"
//forward declation

class Square : public QGraphicsItem
{
public:
    QPair<int,int> loc;
    QPair<int,int> size;
    QColor fore;
    QColor back;

    Square();
    Square(int x, int y);
    Square(const Square& s):loc(s.loc),size(s.size),fore(s.fore),back(s.back){}
    Square& operator= ( const Square &s ){ loc=(s.loc);size=(s.size);fore=(s.fore);back=(s.back);}
    ~Square(){}
    QRectF boundingRect() const;
    void paint(QPainter *painter,
               const QStyleOptionGraphicsItem *option,
               QWidget *widget);

protected:
    void advance(int phase);

private:
    qreal angle, speed;
    void doCollision();
};

#endif // SQUARE_H
