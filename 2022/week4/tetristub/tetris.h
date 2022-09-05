#ifndef TETRIS_H
#define TETRIS_H
#include <QPainter>
#include <QGraphicsScene>
#include <QTimer>
#include <QPair>
#include "ui_dialog.h"
#include <QVector>
#include <QBrush>
#include "gamefield.h"
//forward declare
class GameField;

class Tetris
{
public:
    Tetris(Ui::Dialog *ui, QGraphicsScene *scene);
    static int SQS;
    static int LEVEL;
    static GameField Game;
    void init();
private:
    QGraphicsScene *scene;
};

#endif // TETRIS_H
