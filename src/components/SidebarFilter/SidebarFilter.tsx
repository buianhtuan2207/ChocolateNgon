import React from 'react';
import './sidebarFilter.scss';
import FilterWidget from '../FilterWidget/FilterWidget';
import FilterMenu from '../FilterMenu/FilterMenu';
import FilterRadio from '../FilterRadio/FilterRadio';
import FilterTag from '../FilterTag/FilterTag';
import { CATEGORIES, FLAVORS, SHAPES } from '../../data/filters';

interface SidebarProps {
    filterState: {
        category: string;
        flavor: string;
        shape: string;
    };
    onFilterChange: (type: 'category' | 'flavor' | 'shape', value: string) => void;
}

export default function SidebarFilter({ filterState, onFilterChange }: SidebarProps) {
    return (
        <aside className="sidebar-container">
            <FilterWidget title="Danh mục">
                <FilterMenu
                    items={CATEGORIES}
                    activeValue={filterState.category}
                    onSelect={(val) => onFilterChange('category', val)}
                />
            </FilterWidget>

            <FilterWidget title="Hương vị (Theo loại)">
                <FilterRadio
                    name="flavor"
                    items={FLAVORS}
                    selectedId={filterState.flavor}
                    onChange={(val) => onFilterChange('flavor', val)}
                />
            </FilterWidget>

            <FilterWidget title="Hình thức">
                <FilterTag
                    items={SHAPES}
                    activeValue={filterState.shape}
                    onSelect={(val) => onFilterChange('shape', val)}
                />
            </FilterWidget>
        </aside>
    );
}