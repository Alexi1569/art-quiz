<template>
  <div class="steps inner">
    <transition name="steps">
      <StepView key="1" :step="step" v-if="step === 1">
        <Arrow
          :arrow="content.info.nextArrow"
          @click.native="step += 1"
        />
        <div class="steps__content inner__content">
          <div class="steps__img">
            <img src="/img/step-1.png" alt="alt">
          </div>
          <div class="steps__top pl pr">
            <Caption
              :caption="content.info.caption"
            />
            <div class="steps__total">
              <p>Цена: <b>{{content.info.price}}</b></p>
              <p>Срок: <b>{{content.info.period}}</b></p>
            </div>
          </div>
          <div class="steps__wrap pr">
            <div class="steps__wrap-info">
              <StepList
                :list="content.info.list.first"
              />
              <StepList
                :list="content.info.list.second"
              />
            </div>
            <div class="steps__controls">
              <Button
                :btn="content.info.btn"
                @click.native="$modal.show('request-modal')"
              />
            </div>
          </div>

          <div class="steps__info">
            <p><b>0{{content.info.step.number}}</b> / 03</p>
          </div>
        </div>
      </StepView>
      <StepView key="2" :class="hoveredItem ? 'step-hovered' : ''" :step="step" v-else-if="step === 2">
        <Arrow
          :arrow="content.functional.nextArrow"
          @click.native="step += 1"
        />
        <Arrow
          :arrow="content.functional.prevArrow"
          @click.native="step -= 1"
        />
        <div class="steps__content inner__content">
          <div class="steps__polygons">
            <Hexagon :img="content.functional.logo">
              <div class="steps__logo-wrap">
                <img v-if="hoveredItem" :src="hoveredItem.logo">
              </div>
            </Hexagon>
            <Hexagon :img="content.functional.year">
              <div class="steps__year-wrap">
                <span>{{hoveredItem ? hoveredItem.year : ''}}</span>
              </div>
            </Hexagon>
          </div>
          <div class="steps__img" :class="hoveredItem ? 'steps__img--hide' : ''">
            <transition name="fade">
              <img :key="hoveredItem ? hoveredItem.img : '/img/step-2.png'" :src="hoveredItem ? hoveredItem.img : '/img/step-2.png'" alt="alt">
            </transition>
          </div>
          <div class="steps__top pl pr">
            <Caption
              :caption="content.functional.caption"
            />
          </div>
          <div class="steps__wrap pr">
            <div class="steps__wrap-info">
              <slick
                ref="stepSlider"
                :options="stepSliderOptions"
                @destroy="handleDestroy"
              >
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />
                <StepList
                  :list="content.functional.list.first"
                  @itemClick="handleItemClick"
                />

              </slick>
            </div>
            <div class="steps__controls">
              <div id="step-controls-wrap" class="step-controls-wrap"></div>
              <Button
                :btn="content.info.btn"
                @click.native="$modal.show('request-modal')"
              />
            </div>
          </div>

          <div class="steps__info">
            <p><b>0{{content.functional.step.number}}</b> / 03</p>
          </div>
        </div>
      </StepView>
      <StepView key="3" :class="hoveredItem ? 'step-hovered' : ''" :step="step" v-else>
        <Arrow
          :arrow="content.technologies.prevArrow"
          @click.native="step > 1 ? step-- : false"
        />
        <div class="steps__content inner__content">
          <div class="steps__wrap">
            <div class="steps__technologies-left">
              <Caption
                :caption="content.technologies.caption"
              />
              <div class="steps__technologies">
                <div class="steps__technologies-row">
                  <div class="steps__technologies-item steps__technologies-item--design">
                    <p class="steps__technologies-title">Design</p>
                    <div class="steps__technologies-content">
                      <div
                        class="steps__technologies-rect"
                        v-for="(item, i) in technologies.design"
                        :key="i"
                        @click="technologies.selectedItem = item"
                        v-html="item.icon"
                      ></div>
                    </div>
                  </div>
                  <div class="steps__technologies-item steps__technologies-item--qa">
                    <p class="steps__technologies-title">QA</p>
                    <div class="steps__technologies-content">
                      <div
                        class="steps__technologies-rect"
                        v-for="(item, i) in technologies.qa"
                        :key="i"
                        @click="technologies.selectedItem = item"
                        v-html="item.icon"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="steps__technologies-row">
                  <div class="steps__technologies-item steps__technologies-item--front">
                    <p class="steps__technologies-title">Front-End</p>
                    <div class="steps__technologies-content">
                      <div
                        class="steps__technologies-rect"
                        v-for="(item, i) in technologies.front"
                        :key="i"
                        @click="technologies.selectedItem = item"
                        v-html="item.icon"
                      ></div>
                    </div>
                  </div>
                  <div class="steps__technologies-item steps__technologies-item--back">
                    <p class="steps__technologies-title">Back-End</p>
                    <div class="steps__technologies-content">
                      <div
                        class="steps__technologies-rect"
                        v-for="(item, i) in technologies.back"
                        :key="i"
                        @click="technologies.selectedItem = item"
                        v-html="item.icon"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="steps__controls">
              <Hexagon
                :img="technologies.hexagon"
              >
                <transition name="tech">
                  <div v-show="technologies.selectedItem" :key="technologies.selectedItem ? technologies.selectedItem.title : ''" class="steps__technologies-right">
                    <div class="steps__technologies-right-inner">
                      <div class="steps__technologies-right-top">
                        <p v-html="technologies.selectedItem ? technologies.selectedItem.title : ''"></p>
                        <i v-html="technologies.selectedItem ? technologies.selectedItem.icon : ''"></i>
                      </div>
                      <div class="steps__technologies-right-text">
                        <p v-html="technologies.selectedItem ? technologies.selectedItem.text : ''"></p>
                      </div>
                    </div>
                  </div>
                </transition>
              </Hexagon>
              <Button
                :btn="content.info.btn"
                @click.native="$modal.show('request-modal')"
              />
            </div>
          </div>

          <div class="steps__info">
            <p><b>0{{content.technologies.step.number}}</b> / 03</p>
          </div>
        </div>
      </StepView>
    </transition>
  </div>
</template>

<script>
  import Caption from '@/components/Caption';
  import Button from '@/components/Button';
  import Arrow from '@/components/Arrow';
  import StepList from '@/components/StepList';
  import StepView from '@/components/StepView';
  import Slick from 'vue-slick';
  import Hexagon from '@/components/Hexagon';

  import 'slick-carousel/slick/slick.css';

  export default {
    computed: {
      content() {
        const params = this.$route.path.split('/').slice(1);
        return this.$store.state[params[0]];
      }
    },
    data() {
      return {
        step: 1,
        hoveredItem: null,
        technologies: {
          selectedItem: null,
          hexagon: {
            view: 'TECHNOLOGIES'
          },
          design: [
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe<br> Photoshop',
              text: 'Многофункциональный графический<br> редактор. Используя данную<br> программу дизайнеры создают<br> визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
          ],
          front: [
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
          ],
          back: [
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
          ],
          qa: [
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 81.8"><style>.ph-st2{fill:#31c5f0}</style><radialGradient id="SVGID_1_" cx="-259.702" cy="431.913" r="1" gradientTransform="matrix(56.9773 0 0 -56.7 14825.223 24509.117)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#34364e" stop-opacity=".98"/><stop offset="1" stop-color="#0c0824"/></radialGradient><path d="M3.5 3.5h74.9v74.9H3.5V3.5z" fill="url(#SVGID_1_)"/><path class="item-title ph-st2" d="M45.6 56.6c1.5.9 4.1 1.5 6.9 1.5 5.6 0 9.7-3 9.7-8.4 0-3.7-1.7-6-6.9-8.6-3.7-1.9-4.3-2.8-4.3-3.9s.9-2.6 3.7-2.6c2.2 0 4.3.6 5.8 1.5.4 0 .4 0 .4-.4v-4.8c0-.2 0-.4-.4-.6-1.1-.4-3.2-.9-6-.9-6 0-9.5 3.7-9.5 8 0 3.9 1.9 6.3 6.9 8.6 3.5 1.7 4.3 2.8 4.3 4.1 0 1.5-1.1 2.6-3.9 2.6-2.2 0-4.8-.6-6.9-1.9-.2-.2-.4 0-.4.2v5c.3.1.3.3.6.6zm-25.7.8H25c.2 0 .4-.2.4-.4V43.8H28c7.8 0 14-3.7 14-12.3 0-6.7-3.7-11.9-13.2-11.9-3.5 0-6.7 0-8.9.2-.2 0-.6.2-.6.4V57c.1.2.1.4.6.4zm8.8-32.1c4.5 0 7.1 2.2 7.1 6.5 0 5.4-3.7 6.9-7.8 6.9h-2.8V25.5c.9-.2 2.2-.2 3.5-.2z"/><path class="ph-st2" d="M0 0v81.8h81.8V0H0zm78.4 78.4H3.5V3.5h74.9v74.9z"/></svg>',
              title: 'Adobe Photoshop',
              text: 'Многофункциональный графический редактор. Используя данную программу дизайнеры создают визуальную часть.'
            },
          ],
        },
        stepSliderOptions: {
          slidesToShow: 1,
          infinite: false,
          slidesToScroll: 1,
          appendArrows: '#step-controls-wrap',
          dots: true,
          dotsClass: 'steps-dots',
          appendDots: '#step-controls-wrap',
          prevArrow: '<div class="slider-arrow slider-arrow--prev"></div>',
          nextArrow: '<div class="slider-arrow slider-arrow--next"></div>',
        },
      }
    },
    components: {
      Caption,
      Button,
      Arrow,
      StepList,
      StepView,
      Slick,
      Hexagon
    },
    mounted() {
      const _self = this;
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.step-list ul li') && _self.hoveredItem !== null) {
          const items = document.querySelectorAll('.step-list ul li');
          for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('bolder');
          }
          _self.hoveredItem = null;
        }
      });
    },
    methods: {
      handleDestroy(e, slick) {
        slick.$slider[0].style.display = 'none';
      },
      handleItemClick(e, item) {
        const isActive = e.target.closest('li').classList.contains('bolder') ? true : false;
        const items = e.target.closest('ul').querySelectorAll('li');

        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove('bolder');
        }

        this.hoveredItem = null;

        if (!isActive) {
          e.target.closest('li').classList.add('bolder');
          this.hoveredItem = item;
        }
      },
    }
  }
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .35s ease-in;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    position: absolute;
    transition: all .35s ease-in;
    transform: translateX(-100%);
  }
  .fade-leave {
    opacity: 0;
    position: absolute;
  }

  .steps-enter-active, .steps-leave-active {
    transition: all .55s ease-in;
  }

  .steps-enter-active {
    .caption {
      transform: translateY(-45%);
      opacity: 0;
    }
    .steps__img {
      transform: translateX(-50%);
      opacity: 0;
    }
    .steps__total {
      transform: translateX(100%);
      opacity: 0;
    }
    .steps__wrap {
      transform: translateY(35%);
      opacity: 0;
    }
    &.step--3 {
      .steps__wrap {
        transform: translateY(0%);
        opacity: 1;
      }
      .steps__controls {
        transform: translateX(50%);
        opacity: 0;
      }
    }
    .steps__technologies {
      opacity: 0;
      transform: translateY(40%);
    }
  }

  .steps-enter, .steps-leave-to {
    opacity: 0;
    transition: .25s transform ease-in, .4s opacity ease;
  }


  .tech-enter-active, .tech-leave-active {
    transition: all .35s ease-in;
    .steps__technologies-right-top {
      transition: all .2s ease-in;
    }

    .steps__technologies-right-text {
      transition: all .2s ease-in .1s;
    }
  }

  .tech-enter, .tech-leave-to {
    .steps__technologies-right-top {
      transform: translateX(40%);
      opacity: 0;
    }
    .steps__technologies-right-text {
      transform: translateX(40%);
      opacity: 0;
    }
  }


  .step--3 {
    .arrow {
      &.arrow--prev {
        .arrow__func {
          top: -6rem;
        }
      }
    }
    .steps {
      &__btn {
        position: absolute;
        bottom: 0;
        right: 12%;
        border: 1.5625rem solid #fff;
      }
      &__wrap {
        padding-left: 12.5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        padding-right: 3%;
      }
      &__controls {
        width: 37.4%;
        display: flex;
        transition: .2s all ease-in .1s;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
      }
      &__content {
        background: url('/img/technologies-bg.png') no-repeat left bottom;
        background-size: 70%;
      }
    }
  }

  .step--2 {
    .steps {
      &__btn {
        &.btn {
          margin-top: 0;
        }
      }
      &__info {
        &.page-corner {
          margin-bottom: 2.6%;
        }
      }
      &__content {
        position: relative;
      }
      &__wrap {
        min-height: 50%;
        &-info {
          padding-right: 9rem;
        }
      }
      &__controls {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin-bottom: -1.4rem;
        & > * {
          margin-bottom: 1.4rem;
        }
      }
    }
  }

  .step {
    &.step-hovered {
      .steps {
        &__year {
          transform: translateX(-15%);
        }
        &__logo {
          transform: translateX(10%);
        }
      }
    }
    &-controls {
      &-wrap {
        position: relative;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        margin-right: 1.25rem;
      }
    }
  }

  .slider {
    &-arrow {
      position: absolute;
      top: 50%;
      cursor: pointer;
      transform: translateY(-40%);
      &.slider-arrow--prev {
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 3.5px 7px 3.5px 0;
        border-color: transparent #C4C4C4 transparent transparent;
      }
      &.slider-arrow--next {
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 3.5px 0 3.5px 7px;
        border-color: transparent transparent transparent #C4C4C4;
      }
    }
  }

  .steps {
    &__technologies {
      margin-top: 3rem;
      transition: .25s all ease-in .25s;
      &-right {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        overflow: hidden;
        justify-content: flex-end;
        text-align: right;
        padding: 9%;
        &-inner {
          width: 100%;
        }
        &-text {
          margin-top: 1.5625rem;
          line-height: 1.3;
          font-size: 1.375em;
        }
        &-top {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          p {
            font-size: 1.875em;
          }
          i {
            display: inline-block;
            width: 4.6875rem;
            margin-left: 1.75rem;
            svg {
              display: block;
              height: auto;
              width: 100%;
              path {
                opacity: 1;
              }
            }
          }
        }
      }
      &-row {
        display: flex;
        margin-bottom: 2rem;
        &:last-of-type {
          margin-bottom: 0;
        }
        &:first-of-type {
          align-items: flex-start;
          justify-content: space-between;
        }
        &:last-of-type {
          justify-content: center;
          align-items: flex-end;
        }
      }
      &-left {
        width: 61%;
      }
      &-hexagon {
        position: relative;
        width: auto;
        height: 63%;
        width: 100%;
        svg {
          width: auto;
          height: 100%;
        }
      }
      &-item {
        &.steps__technologies-item--design {
          width: 25%;
        }
        &.steps__technologies-item--front {
          width: 34%;
        }
        &.steps__technologies-item--back {
          width: 25%;
          margin-left: 4%;
          margin-top: 6%;
        }
        &.steps__technologies-item--qa {
          width: 25%;
        }
      }
      &-title {
        font-size: 1.375em;
      }
      &-content {
        display: flex;
        flex-wrap: wrap;
        margin-right: -.625rem;
        align-items: stretch;
        margin-top: .6rem;
        margin-bottom: -.625rem;
        justify-content: flex-start;
      }
      &-rect {
        width: 3.75rem;
        height: 3.75rem;
        display: flex;
        line-height: 1;
        margin-bottom: .625rem;
        align-items: center;
        justify-content: center;
        margin-right: .625rem;
        svg {
          width: 100%;
          height: auto;
          transition: .2s all ease-in;
          display: block;
          box-shadow: 6px 6px 2px -1px rgba(#333, 0.35);
          * {
            transition: .3s all ease;
          }
          &:hover {
            transform: scale(1.3);
            box-shadow: 6px 6px 2px -1px rgba(#fff, 0.35);
          }
          &:not(:hover) {
            path {
              fill: #333;
            }
            path.item-title {
              fill: #fff;
            }
          }
        }
      }
    }
    &__polygons {
      position: absolute;
      top: 0;
      right: 7.8%;
      width: 13.28%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__info {
      text-align: right;
      font-size: 1.3125em;
      margin-bottom: 3%;
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        display: inline-block;
        height: 1px;
        background: rgba(#333, .25);
        top: 50%;
      }
      &:before {
        width: 34vw;
        right: 100%;
      }
      &:after {
        width: 12rem;
        left: 100%;
      }
      b {
        font-family: 'Acrom';
        font-size: 1.42857142857em;
        background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      padding-right: 4.6875rem;
      padding-left: 4.6875rem;
      margin-right: 4.6875rem;
      margin-bottom: 4rem;
      background-color: #fff;
      position: relative;
    }
    &__year {
      width: 4.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      line-height: 1;
      position: relative;
      margin-top: 1.25rem;
      height: 29.47%;
      transition: .25s all ease;
      &-wrap {
        position: absolute;
        left: 16px;
        top: 16px;
        bottom: 16px;
        right: 16px;
        display: flex;
        align-items: center;
        z-index: -1;
        justify-content: center;
        text-align: center;
        line-height: 1;
      }
      svg {
        width: 100%;
        height: auto;
        path {
          opacity: .4;
        }
      }

    }
    &__logo {
      width: 100%;
      position: relative;
      display: flex;
      transition: .25s all ease;
      text-align: center;
      align-items: center;
      justify-content: center;
      line-height: 1;
      height: 59.36%;
      &-wrap {
        position: absolute;
        left: 16px;
        top: 16px;
        bottom: 16px;
        right: 16px;
        display: flex;
        align-items: center;
        z-index: -1;
        justify-content: center;
        text-align: center;
        line-height: 1;
        img {
          max-width: 90%;
          max-height: 90%;
          width: auto;
          height: auto;
        }
      }
      svg {
        width: 100%;
        height: auto;
      }
    }
    &-controls {
      &-wrap {
        position: relative;
        padding-left: 1.75rem;
        padding-right: 1.75rem;
        margin-right: 2rem;
      }
    }
    &-dots {
      display: flex;
      align-items: center;
      line-height: 1;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        &.slick-active {
          button {
            width: 15px;
            height: 8.66px;
            background-color: rgba(#004f9f, .75);
            margin: 4.33px 0;
            &:before,
            &:after {
              border-left: 7.5px solid transparent;
              border-right: 7.5px solid transparent;
            }
            &:before {
              border-bottom: 4.33px solid rgba(#004f9f, .75);
            }
            &:after {
              border-top: 4.33px solid rgba(#004f9f, .75);
            }
          }
        }
        button {
          cursor: pointer;
          border: 0;
          font-size: 0;
          position: relative;
          width: 10px;
          height: 5.77px;
          background-color: rgba(#C4C4C4, .5);
          margin: 2.89px 0;
          &:before,
          &:after {
            content: "";
            position: absolute;
            width: 0;
            left: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
          }
          &:before {
            bottom: 100%;
            border-bottom: 2.89px solid rgba(#C4C4C4, .5);
          }
          &:after {
            top: 100%;
            width: 0;
            border-top: 2.89px solid rgba(#C4C4C4, .5);
          }
        }
      }
    }
    &__controls {
      position: relative;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }
    &__wrap {
      padding-left: 54.42%;
      margin-top: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      margin-bottom: 3%;
      transition: .3s all ease-in .2s;
      &-info {
        width: 100%;
        padding-right: 4.2rem;
      }
    }
    &__total {
      font-size: 1.875em;
      position: relative;
      padding-right: 3.5rem;
      text-align: right;
      transition: .25s all ease-in-out;
      &:after {
        content: '';
        display: inline-block;
        top: 3%;
        bottom: 3%;
        position: absolute;
        right: 0;
        background-color: rgba(#333, .25);
        width: 1px;
      }
      p {
        text-transform: uppercase;
        margin-bottom: .2rem;
        &:last-of-type {
          margin-bottom: 0;
        }
        b {
          font-family: 'Acrom';
          text-transform: none;
          font-weight: normal;
        }
      }
    }
    &__top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      width: calc(100% - 1.875rem);
      & > * {
        margin-bottom: 1.6rem;
      }
    }
    &__img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 46%;
      height: 80%;
      display: flex;
      transition: .3s all ease;
      align-items: flex-end;
      justify-content: flex-start;
      img {
        display: block;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        transition: .3s all ease;
        width: auto;
      }
    }
  }

  @media screen and (max-width: 1600px) , screen and (max-height: 880px) {
    .step--3 {
      .steps {
        &__controls {
          width: 34%;
        }
      }
    }

    .steps {
      &__technologies {
        &-rect {
          width: 3.25rem;
          height: 3.25rem;
        }
        &-right {
          &-top {
            p {
              font-size: 1.6em;
            }
            i {
              width: 3.8rem;
            }
          }
          &-text {
            font-size: 1.3em;
          }
        }
      }
      &__info {
        margin-bottom: 1.4%;
        font-size: 1.15em;
      }
      &__img {
        max-width: 46%;
      }
      &__total {
        font-size: 1.45em;
      }
      &__wrap {
        padding-left: 49.5%;
      }
    }
  }

  @media screen and (max-width: 1300px) , screen and (max-height: 720px) {
    .steps {
      &__technologies {
        &-rect {
          width: 2.8rem;
          height: 2.8rem;
        }
        &-right {
          &-top {
            p {
              font-size: 1.45em;
            }
            i {
              width: 3rem;
            }
          }
          &-text {
            font-size: 1em;
          }
        }
      }
      &__img {
        max-width: 44%;
      }
      &__total {
        font-size: 1.2em;
        padding-right: 2rem;
      }
      &__wrap {
        padding-left: 47%;
      }
    }
  }

  @media screen and (max-width: 1250px) {
    .steps {
      &__info {
        margin-right: 2.65rem;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .step--3 {
      .steps {
        &__controls {
          width: 37.4%;
        }
      }
    }

    .steps {
      &__technologies {
        &-rect {
          width: 2.2rem;
          height: 2.2rem;
        }
        &-right {
          &-top {
            p {
              font-size: 1.3em;
            }
            i {
              width: 2.7rem;
            }
          }
          &-text {
            font-size: .9em;
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .steps {
      &__info {
        margin-right: 1.8rem;
        padding-left: 2.4rem;
        padding-right: 2.4rem;
      }
      &__img {
        max-width: 40%;
      }
      &__total {
        font-size: 1em;
      }
      &__wrap {
        padding-left: 44%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .step--3 {
      .steps {
        &__info {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          &:before,
          &:after {
            width: 500px;
          }
        }
        &__btn {
          position: initial;
          margin-left: auto;
          margin-right: auto;
        }
        &__content {
          background: none;
        }
        &__controls {
          margin-left: auto;
          text-align: center;
          margin-right: auto;
          width: 100%;
        }
        &__wrap {
          flex-wrap: wrap;
        }
      }
    }

    .step {
      &.step-hovered {
        .steps {
          &__logo {
            transform: translateX(-10%);
          }
          &__year {
            transform: translateX(5%);
          }
        }
      }
    }

    .steps {
      &__technologies {
        &-hexagon {
          display: none;
        }
        &-title {
          font-size: 1.15em;
        }
        &-left {
          width: 100%;
          background: url('/img/technologies-bg.png') no-repeat left bottom;
          background-size: cover;
        }
      }
      &__polygons {
        flex-direction: row;
        height: 38%;
        width: 40%;
        bottom: 80%;
        top: auto;
      }
      &__year {
        margin-left: 1.25rem;
        height: 60%;
      }
      &__logo {
        width: 11rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    .step--2 {
      .step {
        &-controls {
          &-wrap {
            margin-right: 0;
          }
        }
      }
      .steps {
        &__controls {
          padding-left: 1.4rem;
          padding-right: 1.4rem;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        &__wrap {
          margin: 0;
          padding-left: 0;
          padding-right: 0;

          &-info {
            padding-right: 7rem;
            padding-left: 7rem;
          }
        }
      }
    }

    .steps {
      &__info {
        margin-top: 2rem;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
      }
      &__img {
        display: none;
      }
      &__wrap {
        padding-left: 1.9375rem;
      }
      &__controls {
        width: 100%;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .step--2 {
      .caption.steps__caption {
        margin-left: 0;
      }
    }

    .steps {
      &__logo {
        width: 8rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    .step--3 {
      .arrow {
        &.arrow--prev {
          top: 9.8rem;
        }
      }
      .steps {
        &__caption {
          text-align: center;
        }
        &__wrap {
          padding-left: 3%;
        }
      }
    }

    .steps {
      &__technologies {
        &-content {
          justify-content: center;
        }
        &-row {
          flex-wrap: wrap;
        }
        &-item {
          margin-bottom: 2rem;
          margin-top: 0 !important;
          margin-left: 0 !important;
          text-align: center;
          width: 100% !important;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .steps {
      &__polygons {
        display: none;
      }
    }

    .step--2 {
      .steps {
        &__caption {
          padding-right: 0;
          width: 100%;
          margin-right: 0;
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    .step--3 {
      .arrow {
        &.arrow--prev {
          top: 9.3rem;
        }
      }
    }

    .step--2 {
      .steps {
        &__wrap {
          &-info {
            padding-left: 5.2rem;
            padding-right: 5.2rem;
          }
        }
      }
    }
  }

</style>