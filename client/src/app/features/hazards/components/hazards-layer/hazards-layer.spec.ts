import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardsLayer } from './hazards-layer';

describe('HazardsLayer', () => {
  let component: HazardsLayer;
  let fixture: ComponentFixture<HazardsLayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HazardsLayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazardsLayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
