"use strict";(self.webpackChunkphoenix_for_ild=self.webpackChunkphoenix_for_ild||[]).push([[843],{4843:(U,L,f)=>{f.r(L),f.d(L,{TF2Painter:()=>X});var D=f(467),r=f(6998),b=f(4149),H=f(3693),p=f(230),z=f(6224),N=f(9041),Y=f(3277);class X extends b.TH2Painter{getObjectName(){return this.$func?.fName??"func"}getClassName(){return this.$func?._typename??r.clTF2}isTF1(){return!0}getPrimaryObject(){return this.$func}updateObject(e){if(!e||this.getClassName()!==e._typename)return!1;delete e.evalPar;const t=this.getHisto();if(this.webcanv_hist){const i=this.getPadPainter()?.findInPrimitives("Func",r.clTH2F);i&&this.updateAxes(t,i,this.getFramePainter())}return this.$func=e,this.createTF2Histogram(e,t),this.scanContent(),!0}redraw(e){return!this._use_saved_points&&("logx"===e||"logy"===e||"zoom"===e)&&(this.createTF2Histogram(this.$func,this.getHisto()),this.scanContent()),super.redraw(e)}createTF2Histogram(e,t){let i=e.fSave.length-6;i>0&&i!==(e.fSave[i+4]+1)*(e.fSave[i+5]+1)&&(i=0),this._use_saved_points=i>0&&(r.settings.PreferSavedPoints||this.use_saved>1);const x=this.getFramePainter(),y=this.getPadPainter()?.getRootPad(!0),c=y?.fLogx,n=y?.fLogy,s=x?.getGrFuncs(this.second_x,this.second_y);let d=e.fXmin,u=e.fXmax,M=e.fYmin,g=e.fYmax,o=Math.max(e.fNpx,20),P=Math.max(e.fNpy,20);if(s?.zoom_xmin!==s?.zoom_xmax){const a=(u-d)/o;d<s.zoom_xmin&&s.zoom_xmin<u&&(d=Math.max(d,s.zoom_xmin-a)),d<s.zoom_xmax&&s.zoom_xmax<u&&(u=Math.min(u,s.zoom_xmax+a))}if(s?.zoom_ymin!==s?.zoom_ymax){const a=(g-M)/P;M<s.zoom_ymin&&s.zoom_ymin<g&&(M=Math.max(M,s.zoom_ymin-a)),M<s.zoom_ymax&&s.zoom_ymax<g&&(g=Math.min(g,s.zoom_ymax+a))}const B=(a,m)=>{t.fNcells!==(a+2)*(m+2)&&(t.fNcells=(a+2)*(m+2),t.fArray=new Float32Array(t.fNcells)),t.fArray.fill(0),t.fXaxis.fNbins=a,t.fXaxis.fXbins=[],t.fYaxis.fNbins=m,t.fYaxis.fXbins=[]};if(delete this._fail_eval,!this._use_saved_points){let a=!1;!e.evalPar&&!(0,H.Dx)(e)&&(a=!0),B(o,P),t.fXaxis.fXmin=d,t.fXaxis.fXmax=u,t.fYaxis.fXmin=M,t.fYaxis.fXmax=g,c&&(0,p.produceTAxisLogScale)(t.fXaxis,o,d,u),n&&(0,p.produceTAxisLogScale)(t.fYaxis,P,M,g);for(let m=0;m<P&&!a;++m)for(let _=0;_<o&&!a;++_){const F=t.fXaxis.GetBinCenter(_+1),T=t.fYaxis.GetBinCenter(m+1);let v=0;try{v=e.evalPar(F,T)}catch{a=!0}a||t.setBinContent(t.getBin(_+1,m+1),Number.isFinite(v)?v:0)}a&&(this._fail_eval=!0),a&&i>6&&(this._use_saved_points=!0)}if(this._use_saved_points){let j=function(h,C){if(h<a||h>m||T<=0||C<_||C>F||v<=0)return 0;const l=Math.min(o-1,Math.floor((h-a)/T)),S=Math.min(P-1,Math.floor((C-_)/v)),O=(h-(a+l*T))/T,A=(C-(_+S*v))/v;return(1-O)*(1-A)*e.fSave[S*(o+1)+l]+O*(1-A)*e.fSave[S*(o+1)+l+1]+O*A*e.fSave[(S+1)*(o+1)+l+1]+(1-O)*A*e.fSave[(S+1)*(o+1)+l]};o=Math.round(e.fSave[i+4]),P=Math.round(e.fSave[i+5]);const a=e.fSave[i],m=e.fSave[i+1],_=e.fSave[i+2],F=e.fSave[i+3],T=(m-a)/o,v=(F-_)/P;B(e.fNpx,e.fNpy),t.fXaxis.fXmin=e.fXmin,t.fXaxis.fXmax=e.fXmax,t.fYaxis.fXmin=e.fYmin,t.fYaxis.fXmax=e.fYmax;for(let h=0;h<e.fNpy;++h){const C=t.fYaxis.GetBinCenter(h+1);for(let l=0;l<e.fNpx;++l){const E=j(t.fXaxis.GetBinCenter(l+1),C);t.setBinContent(t.getBin(l+1,h+1),Number.isFinite(E)?E:0)}}}return t.fName="Func",(0,r.setHistogramTitle)(t,e.fTitle),t.fMinimum=e.fMinimum,t.fMaximum=e.fMaximum,t.fLineColor=e.fLineColor,t.fLineStyle=e.fLineStyle,t.fLineWidth=e.fLineWidth,t.fFillColor=e.fFillColor,t.fFillStyle=e.fFillStyle,t.fMarkerColor=e.fMarkerColor,t.fMarkerStyle=e.fMarkerStyle,t.fMarkerSize=e.fMarkerSize,t.fBits|=r.kNoStats,t}extractAxesProperties(e){super.extractAxesProperties(e);const t=this.$func,i=t?.fSave.length??0;i>6&&this._use_saved_points&&(this.xmin=Math.min(this.xmin,t.fSave[i-6]),this.xmax=Math.max(this.xmax,t.fSave[i-5]),this.ymin=Math.min(this.ymin,t.fSave[i-4]),this.ymax=Math.max(this.ymax,t.fSave[i-3])),t&&(this.xmin=Math.min(this.xmin,t.fXmin),this.xmax=Math.max(this.xmax,t.fXmax),this.ymin=Math.min(this.ymin,t.fYmin),this.ymax=Math.max(this.ymax,t.fYmax))}getTF2Tooltips(e){const t=[this.getObjectHint()],i=this.getFramePainter()?.getGrFuncs(this.options.second_x,this.options.second_y);if(!i||!(0,r.isFunc)(this.$func?.evalPar))return t.push("grx = "+e.x,"gry = "+e.y),t;const x=i.revertAxis("x",e.x),y=i.revertAxis("y",e.y);let c=0,n=!1;try{c=this.$func.evalPar(x,y)}catch{n=!0}return t.push("x = "+i.axisAsText("x",x),"y = "+i.axisAsText("y",y),"value = "+(n?"<fail>":(0,N.lg)(c,r.gStyle.fStatFormat))),t}processTooltipEvent(e){if(this._use_saved_points)return super.processTooltipEvent(e);let t=this.draw_g?.selectChild(".tooltip_bin");if(!this.draw_g||!e)return t?.remove(),null;const i={name:this.$func?.fName,title:this.$func?.fTitle,x:e.x,y:e.y,color1:this.lineatt?.color??"green",color2:this.fillatt?.getFillColorAlt("blue")??"blue",lines:this.getTF2Tooltips(e),exact:!0,menu:!0};return e.disabled?t.remove():(t.empty()&&(t=this.draw_g.append("svg:circle").attr("class","tooltip_bin").style("pointer-events","none").style("fill","none").attr("r",(this.lineatt?.width??1)+4)),t.attr("cx",e.x).attr("cy",e.y).call(this.lineatt?.func)),i}fillWebObjectOptions(e){e.fcust=this._fail_eval&&!this.use_saved?"func_fail":""}static draw(e,t,i){return(0,D.A)(function*(){const x=(0,p.scanTF1Options)(i);i=x.opt,delete x.opt;const y=new N.nC(i);y.empty()?i="cont3":"SAME"===y.opt&&(i="cont2 same");const c=(0,r.isStr)(i)?i.toUpperCase():"";let n;("SAMECOLORZ"===c||"SAMECOLOR"===c||"SAMECOLZ"===c)&&(i="samecol"),(0===i.indexOf("same")||0===i.indexOf("SAME"))&&((0,z.Nn)(e)||(i="A_ADJUST_FRAME_"+i.slice(4))),x.webcanv_hist&&(n=new z.JW(e).getPadPainter()?.findInPrimitives("Func",r.clTH2F)),n||(n=(0,r.createHistogram)(r.clTH2F,20,20),n.fBits|=r.kNoStats);const s=new X(e,n);return s.$func=t,Object.assign(s,x),s.createTF2Histogram(t,n),Y.mf._drawHist(s,i)})()}}}}]);