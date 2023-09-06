window.onload = function () {
    Particles.init({
      selector: ".background-tn"
    });
  };
  const particles = Particles.init({
    selector: ".background-tn",
    color: ["#03dac6", "#ff0266", "#000000"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#faebd7", "#03dac6", "#ff0266"],
          maxParticles: 43,
          connectParticles: false
        }
      }
    ]
  });
  
  class NavigationPage {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      this.lastScroll = 0;
      let self = this;
      $(".nav-tab-1").click(function () {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(() => {
        this.onScroll();
      });
      $(window).resize(() => {
        this.onResize();
      });
    }
  
    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop =
        $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
      $("html, body").animate({ scrollTop: scrollTop }, 600);
    }
  
    onScroll() {
      this.checkHeaderPosition();
      this.findCurrentTabSelector();
      this.lastScroll = $(window).scrollTop();
    }
  
    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }
  
    checkHeaderPosition() {
      const headerHeight = 75;
      if ($(window).scrollTop() > headerHeight) {
        $(".nav-container-tn").addClass("nav-container-tn--scrolled");
      } else {
        $(".nav-container-tn").removeClass("nav-container-tn--scrolled");
      }
      let offset =
        $(".nav-custome").offset().top +
        $(".nav-custome").height() -
        this.tabContainerHeight -
        headerHeight;
      if (
        $(window).scrollTop() > this.lastScroll &&
        $(window).scrollTop() > offset
      ) {
        $(".nav-container-tn").addClass("nav-container-tn--move-up");
        $(".nav-container-tn").removeClass("nav-container-tn--top-first");
        $(".nav-container-tn").addClass("nav-container-tn--top-second");
      } else if (
        $(window).scrollTop() < this.lastScroll &&
        $(window).scrollTop() > offset
      ) {
        $(".nav-container-tn").removeClass("nav-container-tn--move-up");
        $(".nav-container-tn").removeClass("nav-container-tn--top-second");
        $(".nav-container-tn-container").addClass("nav-container-tn--top-first");
      } else {
        $(".nav-container-tn").removeClass("nav-container-tn--move-up");
        $(".nav-container-tn").removeClass("nav-container-tn--top-first");
        $(".nav-container-tn").removeClass("nav-container-tn--top-second");
      }
    }
  
    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $(".nav-tab-1").each(function () {
        let id = $(this).attr("href");
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom =
          $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if (
          $(window).scrollTop() > offsetTop &&
          $(window).scrollTop() < offsetBottom
        ) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if (this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
  
    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
      }
      $(".nav-tab-slider").css("width", width);
      $(".nav-tab-slider").css("left", left);
    }
  }
  
  new NavigationPage();