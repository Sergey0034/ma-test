import {Component, Input, OnChanges, signal, SimpleChanges} from '@angular/core';
import {TreeNode} from '../../../types/treeNode.type';
import {NodeComponent} from '../node/node.component';

@Component({
  selector: 'app-tree',
  imports: [NodeComponent],
  templateUrl: './tree.component.html',
})
export class TreeComponent implements OnChanges {
  @Input() tree!: TreeNode;
  @Input() treeIndex!: number;

  marginLeftValueDefault = 24;
  indexOffsetNode = 1;
  nameButton = signal('');
  isExpanded = signal(false);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['treeIndex']) {
      this.isExpanded.set(this.treeIndex === 1);
      this.nameButton.set(this.treeIndex === 1 ? 'Print console' : 'Открыть все нижележащие узлы');
    }
  }

  handlerClickNodeBtn = (id: number, treeIndex: number) => {
    if (treeIndex === 1) {
      if (this.tree) console.log(`Нажали на узел ID ${id}`)
    } else {
      this.nameButton.set(this.isExpanded() ? 'Открыть все нижележащие узлы' : 'Скрыть все нижележащие узлы');
      this.isExpanded.update(prev => !prev)
    }
  }
}
