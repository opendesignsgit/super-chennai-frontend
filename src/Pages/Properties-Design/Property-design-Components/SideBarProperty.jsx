export default function SidebarProperty() {
  return (
    <>
      <section className="siderbar-properties">
        <div className="applied-filters">
          <div className="selcetedapplied">Applied Filters</div>
          <div className="plusmorefilters">
            <span>Clear All </span>
          </div>
        </div>

        <div className="selected-filters">
          <div className="selected-individual-filter">
            <span>Flat / Appartments</span>
            <img src="/images/icons/close-filter-page.svg" alt="" />
          </div>

          <div className="selected-individual-filter">
            <span>Family</span>
            <img src="/images/icons/close-filter-page.svg" alt="" />
          </div>
          <div className="selected-individual-filter">
            <span>2BHK</span>
            <img src="/images/icons/close-filter-page.svg" alt="" />
          </div>
        </div>

        <div className="listing-filters">
          <div className="listing-individual-filter">
            <span className="heading-filters">No. of Bedrooms</span>

            <div className="flex items-center gap-2 plusmorefilters">
              <span> Clear</span>

              <img src="/images/icons/down-arrow-filter.svg" alt="" />
            </div>
          </div>

          <div className="individual-listing-filters ">
            <div className="selected-individual-listing activeStateFilter">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>1 RK/1 BHK</span>
            </div>
            <div className="selected-individual-listing activeStateFilter">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>2 BHK</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>3 BHK</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>4 BHK</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>5 BHK</span>
            </div>
          </div>

          <div className="plusmorefilters">
            <span> +5 more</span>
          </div>
        </div>

        <div className="listing-filters">
          <div className="listing-individual-filter">
            <span className="heading-filters">Type of Property</span>

            <div className="flex items-center gap-2 plusmorefilters">
              <span> Clear</span>

              <img src="/images/icons/down-arrow-filter.svg" alt="" />
            </div>
          </div>

          <div className="individual-listing-filters">
            <div className="selected-individual-listing activeStateFilter">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Residential Apartment</span>
            </div>
            <div className="selected-individual-listing activeStateFilter">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Independent House/Villa</span>
            </div>
            <div className="selected-individual-listing activeStateFilter">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Independent/Builder Floor</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Farm House</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Serviced Apartments</span>
            </div>
          </div>

          <div className="plusmorefilters">
            <span> +5 more</span>
          </div>
        </div>

        <div className="listing-filters">
          <div className="listing-individual-filter">
            <span className="heading-filters">Available for</span>

            <div className="flex items-center gap-2 plusmorefilters">
              <span> Clear</span>

              <img src="/images/icons/down-arrow-filter.svg" alt="" />
            </div>
          </div>

          <div className="individual-listing-filters">
            <div className="selected-individual-listing activeStateFilter">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Family</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Single Women</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Single Men</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Tenants with Company</span>
            </div>
          </div>

          <div className="plusmorefilters">
            <span> +5 more</span>
          </div>
        </div>

        <div className="listing-filters">
          <div className="listing-individual-filter">
            <span className="heading-filters">Localities</span>

            <div className="flex items-center gap-2 plusmorefilters">
              <span> Clear</span>
              <img src="/images/icons/down-arrow-filter.svg" alt="" />
            </div>
          </div>

          <div className="inputToggleFilters">
            <div className="checkboxfilterselected">
              <input style={{ accentColor: "#a44294" }} type="checkbox" />{" "}
              Pallavarm
            </div>
            <div className="checkboxfilterselected">
              <input style={{ accentColor: "#a44294" }} type="checkbox" /> OMR
            </div>
            <div className="checkboxfilterselected">
              <input style={{ accentColor: "#a44294" }} type="checkbox" /> ECR
            </div>
            <div className="checkboxfilterselected">
              <input style={{ accentColor: "#a44294" }} type="checkbox" /> Padur
            </div>
          </div>

          <div className="plusmorefilters">
            <span> +5 more</span>
          </div>
        </div>

        <div className="listing-filters">
          <div className="listing-individual-filter">
            <span className="heading-filters">Amenities</span>

            <div className="flex items-center gap-2 plusmorefilters">
              <span> Clear</span>

              <img src="/images/icons/down-arrow-filter.svg" alt="" />
            </div>
          </div>

          <div className="individual-listing-filters">
            <div className="selected-individual-listing activeStateFilter">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Parking</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Lift</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Park</span>
            </div>
            <div className="selected-individual-listing">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Power Backups</span>
            </div>
            <div className="selected-individual-listing activeStateFilter">
              <img src="/images/icons/add-filter.svg" alt="" />
              <span>Gym</span>
            </div>
          </div>

          <div className="plusmorefilters">
            <span> +5 more</span>
          </div>
        </div>
      </section>
    </>
  );
}
