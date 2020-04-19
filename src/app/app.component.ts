import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('anim', [
      state(
        'start',
        style({
          transform: 'translateX(100px)',
          opacity: 0
        })
      ),
      state(
        'delayStart',
        style({
          transform: 'translateX(0)',
          opacity: 1
        })
      ),
      state(
        'delayEnd',
        style({
          transform: 'translateX(0)',
          opacity: 1
        })
      ),
      state(
        'end',
        style({
          transform: 'translateX(-100px)',
          opacity: 0
        })
      ),
      transition('start => delayStart', animate(1 + 's ease-in')),
      transition('delayStart => delayEnd', animate(5 + 's ease-in')),
      transition('delayEnd => end', animate(1 + 's ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, modi nulla optio at voluptatibus, tempora omnis sunt facilis accusamus ad, similique ullam quasi voluptatem harum tempore dolorum cum possimus nisi eum molestias! Quasi eaque quisquam a molestiae, voluptatibus soluta tempore placeat omnis ut repellat quis nam ipsam facere dignissimos excepturi blanditiis atque minima. Sed distinctio, natus excepturi commodi temporibus quos, esse culpa eveniet molestias et, quaerat ratione dignissimos omnis tenetur. Explicabo qui sapiente veritatis totam, tenetur, deleniti tempora culpa eos ex atque minus consequuntur dolor laudantium unde molestias recusandae magnam animi, eveniet nobis delectus placeat dignissimos harum repudiandae? Atque, quos, laudantium eveniet distinctio fugit nobis repudiandae omnis temporibus, tempore totam quas illo exercitationem ducimus alias cumque nam ea dignissimos esse doloribus dolores ut suscipit aliquam! Blanditiis in exercitationem suscipit saepe eaque quod quam voluptates ullam. Placeat iusto rem odio excepturi assumenda amet numquam nobis, atque repellat cum explicabo consequuntur voluptatum et harum vero asperiores. Odit ut architecto provident quod iusto ipsam eius magni, accusamus molestiae facere et error cum. Reiciendis nulla at recusandae mollitia debitis accusantium necessitatibus, fugiat expedita velit nobis numquam, dicta non voluptate tempora inventore nemo dignissimos. Suscipit ipsum reiciendis itaque ad voluptate eveniet modi, molestias dolore exercitationem dicta consequatur distinctio corrupti laudantium temporibus corporis voluptatibus qui facere incidunt quos quasi vero tenetur doloremque? Nesciunt laborum, eaque deleniti molestiae neque impedit hic, odio repellat animi nostrum obcaecati modi nam, aliquid dignissimos! Ipsum amet fugit magni repudiandae aliquam necessitatibus. Amet labore est voluptate voluptas alias sunt distinctio quaerat, voluptatibus ullam explicabo. A consequatur excepturi explicabo culpa fugit repudiandae incidunt, voluptatibus harum sapiente? Ipsa, et ab! At debitis, assumenda, dicta nemo consequatur perferendis iste corporis possimus, laudantium non fugit omnis minima necessitatibus illum deleniti provident sint? Eum saepe vitae quasi culpa voluptatibus, libero tempore nemo dolores nostrum magnam earum alias fugiat ducimus pariatur dignissimos, reprehenderit ab reiciendis ad sit explicabo aut atque quam. Velit distinctio placeat voluptatibus, at labore ducimus quibusdam iste debitis? Itaque, voluptas libero? Eveniet aperiam accusantium sequi assumenda minima aliquid est vel. Itaque ab dolorum molestias ex enim distinctio minus eos esse, expedita nobis totam provident nostrum voluptas quam quas hic veritatis dolore incidunt suscipit error dolores, cum aut amet reprehenderit! Quo harum rem obcaecati dolore veniam ex corporis eaque amet sint neque nihil, maxime laudantium, ipsum, unde molestias provident quos perferendis commodi quae vel? Molestias maiores cupiditate fugit magni natus corrupti enim magnam consectetur, exercitationem, architecto optio, commodi reiciendis odit ullam temporibus id odio nobis! Velit totam rerum laudantium distinctio veritatis architecto pariatur perferendis esse repellendus vitae, qui provident nulla illum mollitia eius cupiditate numquam libero, quis ut corrupti dolorum! Beatae numquam debitis fuga iure omnis provident laudantium, distinctio fugiat aut dolor quia. Debitis aperiam nostrum magni quae laboriosam, modi veritatis dolorem enim dicta corporis, beatae quidem, harum ut aliquam aliquid quibusdam nesciunt amet! Officiis beatae quam eaque exercitationem aliquid maiores fuga accusantium qui cumque eos. Vel, minus rem culpa iure est et nam ab perferendis veritatis sint provident expedita fuga doloribus exercitationem recusandae ipsum doloremque!';

  disabled = false;

  handler(hasTruncated) {
    console.log(hasTruncated);
  }

  setDisable() {
    this.disabled = !this.disabled;
  }

  index = 0;
  sVar = 0;
  public text = '';
  arr = [
    'he ',
    'pomodoro topakaa chuvaaakk ola my ded moroz ha ha ho ho ho',
    'lalaka chubaka han solo mama mia , ddsasdfasdfasdfasdf',
    'ups hey lala ley koleso o top top heyasdfasdfasdfasdfasdfasdfasdfasdfasf'
  ];
  public lhArr = ['55px', '55px', '50px', '55px'];
  public fsArr = ['50px', '45px', '30px', '40px'];
  public fs = '50px';
  public lh = '40px';
  public numberOfLines = 1;
  ngOnInit() {
    this.getNextItem();
    this.sVar = 1;
  }

  handler2(res: boolean) {
    console.log('has tr::', res);
  }

  get eState() {
    // console.log('sv === ', this.sVar);
    if (this.sVar === 1) {
      return 'start';
    } else if (this.sVar === 2) {
      return 'delayStart';
    } else if (this.sVar === 3) {
      return 'delayEnd';
    } else if (this.sVar === 4) {
      return 'end';
    }
    return 'ni';
  }
  toggle() {
    if (this.sVar !== -1) {
      this.sVar = this.sVar === 4 ? 1 : this.sVar + 1;
    }
  }
  animEnd(e) {
    // console.log('ani end');
    if (this.sVar === 4) {
      this.nextItem();
    }
    this.toggle();
  }
  nextItem() {
    this.getNextItem();
    if (this.index === this.arr.length) {
      this.index = 0;
    }
  }

  getNextItem() {
    console.log('this.numberOfLInes:', this.numberOfLines);
    console.log('index::', this.index);
    this.text = this.arr[this.index];
    this.fs = this.fsArr[this.index];
    this.lh = this.lhArr[this.index];
    console.log('text::', this.text);
    this.index++;
  }
}
