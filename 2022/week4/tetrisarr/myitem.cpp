// myitem.cpp

#include "myitem.h"

MyItem::MyItem()
{
    // random start rotation
    angle = (qrand() % 360);
    setRotation(angle);

    // set the speed
    speed = 5;  // 5 pixels

    // random start position
    int startX = 0;
    int startY = 0;

    if(qrand() % 1)
    {
        startX = qrand() % 200;
        startY = qrand() % 200;
    }
    else
    {
        startX = qrand() % -100;
        startY = qrand() % -100;
    }

    setPos(mapToParent(startX, startY));
}

QRectF MyItem::boundingRect() const
{
    return QRect(0,0,20,20);
}

void MyItem::paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget)
{
    QRectF rect = boundingRect();

    // basic collision detection

    if(scene()->collidingItems(this).isEmpty())
    {
        // no collision
        QPen pen(Qt::green, 5);
        painter->setPen(pen);
    }
    else
    {
        // collision !!!
        QPen pen(Qt::red, 5);
        painter->setPen(pen);

        // set the position
        doCollision();
    }

    painter->drawEllipse(rect);
}

void MyItem::advance(int phase)
{
    if(!phase) return;

    QPointF location = this->pos();

    setPos(mapToParent(0, -speed));
}

void MyItem::doCollision()
{
    // get a new position

    // change the angle with randomness
    if(qrand() % 1)
    {
        setRotation(rotation() + (180 + (qrand() % 10)));
    }
    else
    {
        setRotation(rotation() + (180 + (qrand() % -10)));
    }

    // check if the new position is in bounds
    QPointF newPoint = mapToParent(-(boundingRect().width()), -(boundingRect().width() + 2));

    if(!scene()->sceneRect().contains((newPoint)))
    {
        // move back in bounds
        newPoint = mapToParent(0,0);
    }
    else
    {
        // set the new position
        setPos(newPoint);
    }
}
