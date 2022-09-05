#include "tetris.h"
#include "square.h"
#include "myitem.h"

int Tetris::SQS = 20;
int Tetris::LEVEL = 0;
GameField Tetris::Game;

Tetris::Tetris(Ui::Dialog* ui, QGraphicsScene *scene)
{
    ui->graphicsView->setScene(scene);

    // anti-aliasing
    ui->graphicsView->setRenderHint(QPainter::Antialiasing);

    //
    // The bounding rectangle of the scene
    // The scene rectangle defines the extent of the scene.
    // It is primarily used by QGraphicsView
    // to determine the view's default scrollable area,
    // and by QGraphicsScene to manage item indexing.
    // void	setSceneRect(qreal x, qreal y, qreal w, qreal h)
    scene->setSceneRect(0, 0,Game.boardWidth(), Game.boardHeight());

    QLineF topLine(scene->sceneRect().topLeft(),
                   scene->sceneRect().topRight());
    QLineF leftLine(scene->sceneRect().topLeft(),
                   scene->sceneRect().bottomLeft());
    QLineF rightLine(scene->sceneRect().topRight(),
                   scene->sceneRect().bottomRight());
    QLineF bottomLine(scene->sceneRect().bottomLeft(),
                   scene->sceneRect().bottomRight());

    QPen myPen = QPen(Qt::red);

    scene->addLine(topLine, myPen);
    scene->addLine(leftLine, myPen);
    scene->addLine(rightLine, myPen);
    scene->addLine(bottomLine, myPen);

    int w = Game.width;
    int h = Game.height;

    for(int i = 0; i < w*h; i++)
    {
        Square *s = new Square(i%w,i/h);
        Game.nullify(s);
        Game.add(s);
        scene->addItem(s);
    }
}
void Tetris::init(){
    //Game.newSquare();

}
