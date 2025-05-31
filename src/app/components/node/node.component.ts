import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TreeNode} from '../../../types/treeNode.type';

@Component({
  selector: 'app-node',
  imports: [],
  templateUrl: './node.component.html',
})
export class NodeComponent implements OnChanges {
  @Input() node!: TreeNode;
  @Input() indexOffsetNode!: number;
  @Input() marginLeftValueDefault!: number;
  @Input() treeIndex!: number;
  @Input() isExpanded!: boolean;
  @Input() handlerClickNodeBtn!: (id: number, treeIndex: number) => void;
  @Input() nameButton!: string;

  isShowButton = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['treeIndex']) {
      this.isShowButton = this.treeIndex === 1 || (this.treeIndex === 2 && !this.isExpanded);
    }
  }
}
